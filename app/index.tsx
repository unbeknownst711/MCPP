import { Pressable, ScrollView, Text, View, TextInput } from "react-native";
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import { getPosts, postData } from "../services/api";

export default function Index() {
  const [posts, setPosts] = useState<any[]>([]);

  // form state
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    getPosts().then((res) => {
      if (res.status === 200) {
        setPosts(res.data);
      } else console.log("error");
    });
  };

  const handleSubmit = () => {
    if (!title || !body || !userId) return;

    postData({
      title,
      body,
      userId: Number(userId),
    })
      .then((res) => {
        const newPost = res.data;

        setPosts((prev) => [newPost, ...prev]);

        // reset form
        setTitle("");
        setBody("");
        setUserId("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{
      flex: 1,
      padding: 20,
    }}>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Pressable
        onPress={handleSubmit}
        style={{
          backgroundColor: "green",
          padding: 12,
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white" }}>Submit Post</Text>
      </Pressable>

      <ScrollView>
        {posts.map((post) => (
          <Pressable
            key={post.id}
            style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
            onPress={() =>
              router.push({
                pathname: "/postDetail",
                params: {
                  post: JSON.stringify(post), // ✅ pass full object
                }
              })
            }
          >
            <Text>Post Number: {post.id}</Text>
            <Text>Title: {post.title}</Text>
            <Text>Body: {post.body}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}