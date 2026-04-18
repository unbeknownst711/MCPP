import { getUserDetail } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from 'react';
import { Text, View } from "react-native";

export default function PostDetail() {
  const { post: postParam } = useLocalSearchParams<{ post: string }>();

  const [post, setPost] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (postParam) {
      const parsedPost = JSON.parse(postParam);
      setPost(parsedPost);

      // fetch user only
      getUserDetail(Number(parsedPost.userId)).then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
      });
    }
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    }}>

      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        {post?.title}
      </Text>

      <Text style={{ textAlign: "center" }}>
        {post?.body}
      </Text>

      <View style={{ height: 10 }} />

      <Text>Post Created By</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>

    </View>
  );
}