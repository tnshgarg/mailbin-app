import { Stack } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sign } from "react-native-pure-jwt";

export default function SignInScreen() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "288556331838-quj929grjbnjudlcbvlpjn4bgtdjpiu3.apps.googleusercontent.com",
    iosClientId:
      "288556331838-8g53pe6dsmhqk2gilns8134tlqldmm1o.apps.googleusercontent.com",
    webClientId:
      "288556331838-pv18scatla236etu1gon3mnjlgfqtupl.apps.googleusercontent.com",
    scopes: [
      "https://www.googleapis.com/auth/gmail.readonly",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    console.log("USer: ", user);
    if (!user) {
      if (response?.type == "success") {
        const accessToken = response.authentication?.accessToken;
        const auth = response.authentication;
        const signedToken = await sign(
          {
            iss: {
              access_token: auth?.accessToken,
              refresh_token: auth?.refreshToken,
              scope: auth?.scope,
              token_type: auth?.tokenType,
              expiry_date: auth?.expiresIn,
            },
            exp: new Date().getTime() + 3600 * 1000,
          },
          "mytoenailsuckstobeatoenail",
          { alg: "HS256" }
        );
        console.log("accessToken: ", accessToken);
        console.log("signedToken: ", signedToken);
        await getUserInfo(accessToken!);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.json();
      console.log("USER: ", user);
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Sign In" }} />
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.loginLogo}
          />
        }
      >
        <ThemedView style={styles.child}>
          <ThemedText>{JSON.stringify(userInfo)}</ThemedText>
          <ThemedView>
            <ThemedText type="title" style={styles.heading}>
              Easiest Way to Clean Your Inbox for Free
            </ThemedText>
            <ThemedText type="subtitle" style={styles.subheading}>
              Clean your inbox for Free with Mailbin
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.checkContainer}>
            <Image
              source={require("@/assets/images/checkbox.png")}
              style={styles.checkbox}
            />
            <ThemedText style={styles.checkText}>
              Unsubscribe from Unwanted Emails
            </ThemedText>
          </ThemedView>
          <TouchableOpacity
            onPress={() => promptAsync()}
            activeOpacity={0.8}
            style={styles.gmailContainer}
          >
            <ThemedView style={styles.imgContainer}>
              <Image
                style={styles.gmail}
                source={require("@/assets/images/gmail.png")}
              />
            </ThemedView>
            <ThemedText style={styles.gmailText}>Connect your Gmail</ThemedText>
          </TouchableOpacity>
          <ThemedText style={styles.bottom}>
            By signing up, you agree to our Terms of Use and Privacy Policy
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loginLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  gmail: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  gmailContainer: {
    backgroundColor: "#2a75f3",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  gmailText: {
    fontSize: 20,
    fontWeight: 600,
    color: "white",
    marginLeft: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  imgContainer: {
    backgroundColor: "#f4f1ec",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mainlogo: {
    resizeMode: "cover",
    width: "100%",
    height: 300,
  },
  parent: {},
  child: {},
  heading: {
    textAlign: "left",
    fontSize: 26,
    marginBottom: 10,
  },
  subheading: {
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 40,
  },
  bottom: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
    marginTop: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 14,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  checkText: {
    fontSize: 16,
    fontWeight: 500,
  },
});
