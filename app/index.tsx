import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as FileSystem from "expo-file-system";
import { createClient } from "@supabase/supabase-js";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState<Coordinates | null>(null);
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // 📸 OPEN CAMERA (MAIN FEATURE)
  const openCamera = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      getLocation(); // auto get location after taking photo
    }
  };

  // 📍 GET CURRENT LOCATION (NO MAP)
  const getLocation = async () => {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Location permission denied!");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  // 💾 SAVE IMAGE TO GALLERY
  const saveImage = async () => {
    if (!image) {
      Alert.alert("No image to save!");
      return;
    }

    const permission = await MediaLibrary.requestPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required!");
      return;
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(image);
      await MediaLibrary.createAlbumAsync("MyApp", asset, false);
      Alert.alert("Saved to gallery!");
    } catch (error) {
      Alert.alert("Error saving image");
    }
  };

  // ☁️ UPLOAD IMAGE + LOCATION TO SUPABASE
  const uploadToSupabase = async () => {
    if (!image || !location) {
      Alert.alert("Image or location missing!");
      return;
    }

    try {
      const fileName = image.split("/").pop() || `photo-${Date.now()}.jpg`;

      const base64 = await FileSystem.readAsStringAsync(image, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const fileBuffer = Uint8Array.from(atob(base64), (c) =>
        c.charCodeAt(0)
      );

      // Upload image
      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(fileName, fileBuffer, {
          contentType: "image/jpeg",
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);

      const imageUrl = data.publicUrl;

      // Insert into DB
      const { error: dbError } = await supabase.from("reports").insert([
        {
          image_url: imageUrl,
          latitude: location.latitude,
          longitude: location.longitude,
        },
      ]);

      if (dbError) throw dbError;

      Alert.alert("Uploaded successfully!");
    } catch (err) {
      console.log(err);
      Alert.alert("Upload failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera + GPS Upload</Text>

      {/* MAIN CAMERA BUTTON */}
      <View style={styles.button}>
        <Button title="TAKE PHOTO" onPress={openCamera} />
      </View>

      {/* IMAGE PREVIEW */}
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.button}>
            <Button title="SAVE TO GALLERY" onPress={saveImage} />
          </View>

          <View style={styles.button}>
            <Button title="UPLOAD (IMG + GPS)" onPress={uploadToSupabase} />
          </View>
        </>
      )}

      {/* LOCATION INFO (optional display) */}
      {location && (
        <View style={styles.info}>
          <Text>Lat: {location.latitude}</Text>
          <Text>Lng: {location.longitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    marginVertical: 6,
    width: 200,
  },
  image: {
    width: 260,
    height: 200,
    marginTop: 15,
  },
  info: {
    marginTop: 10,
    alignItems: "center",
  },
});