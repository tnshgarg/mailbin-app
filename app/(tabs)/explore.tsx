import Button from "@/components/Button";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

export default function TabTwoScreen() {

  const [userInfo, setUserInfo] = useState<any>(null);

  const getUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem("@user");
      console.log("user: ", user);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Failed to get user info:", error);
      return null;
    }
  };

  const logout = async() => {
    await AsyncStorage.clear();
    router.replace("/signin")
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUserInfo();
      setUserInfo(user);
    };
    fetchUserInfo();
  }, []);

  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#C94747", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/account-logo.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Settings</ThemedText>
      </ThemedView>
      <ThemedText>Name: {userInfo?.name ?? "No user info"}</ThemedText>
      <ThemedText>Email: {userInfo?.email ?? "No user info"}</ThemedText>
      <Button title="Logout" icon="exit-outline" onPress={() => logout()} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
