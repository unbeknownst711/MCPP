import { Text, View, Button, Image, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default function Index() {
  const [image, setImage] = useState(null);

  // 📸 OPEN CAMERA
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
    }
  };

  // 🖼 OPEN GALLERY
  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Gallery permission is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 💾 SAVE IMAGE
  const saveImage = async () => {
    if (!image) {
      Alert.alert("No image to save!");
      return;
    }

    const permission = await MediaLibrary.requestPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission to access gallery is required!");
      return;
    }

    try {
      // Save to gallery
      const asset = await MediaLibrary.createAssetAsync(image);
      await MediaLibrary.createAlbumAsync("MyApp", asset, false);

      Alert.alert("Image saved successfully!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error saving image");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Davin D. - 108484</Text>

      <View style={styles.button}>
        <Button title="OPEN CAMERA" onPress={openCamera} />
      </View>

      <View style={styles.button}>
        <Button title="OPEN GALLERY" onPress={openGallery} />
      </View>

      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.button}>
            <Button title="SAVE IMAGE" onPress={saveImage} />
          </View>
        </>
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
  },
  button: {
    marginVertical: 5,
    width: 150,
  },
  image: {
    width: 250,
    height: 200,
    marginTop: 20,
  },
});