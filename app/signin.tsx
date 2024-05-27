import { Stack } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import axios from "axios";
import { openBrowserAsync } from "expo-web-browser";

export default function SignInScreen() {
  const signIn = async () => {
    const response = await axios.get("http://localhost:8000/auth/login");

    const authUrl = response.data?.url;
    if (authUrl) await openBrowserAsync(authUrl);

    return authUrl;
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
            onPress={signIn}
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

// // GoogleLogin.js
// import React, { useEffect, useState } from "react";
// import { Button, View, Text } from "react-native";
// import * as AuthSession from "expo-auth-session";
// import * as WebBrowser from "expo-web-browser";
// import axios from "axios";
// import jwtDecode from "jwt-decode"; // Make sure the correct import path is used
// import { useAuth } from "../context/AuthContext";
// import { CLIENT_ID } from "@env";

// WebBrowser.maybeCompleteAuthSession();

// const GOOGLE_CLIENT_ID = CLIENT_ID;
// const REDIRECT_URI = AuthSession.makeRedirectUri({ path: "/auth/login" });
// // const DISCOVERY = AuthSession.useAutoDiscovery("https://accounts.google.com");

// export default function GoogleLogin() {
//   // const { setUser } = useAuth();
//   const [request, response, promptAsync] = AuthSession.useAuthRequest(
//     {
//       clientId: GOOGLE_CLIENT_ID,
//       redirectUri: REDIRECT_URI,
//       scopes: ["openid", "profile", "email"],
//       responseType: AuthSession.ResponseType.Code,
//     },
//     null
//   );

//   console.log("Reddd: ", REDIRECT_URI);
//   console.log("Reqqq: ", request, response, promptAsync);

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { code } = response.params;

//       const fetchToken = async () => {
//         try {
//           const { data } = await axios.post(
//             "http://localhost:8000/auth/callback",
//             {
//               code,
//               redirect_uri: REDIRECT_URI,
//               client_id: GOOGLE_CLIENT_ID,
//               grant_type: "authorization_code",
//             }
//           );

//           const { token } = data;
//           const decoded = jwtDecode.jwtDecode(token);
//           console.log("Decoded: ", decoded);
//           // setUser(decoded);
//         } catch (error) {
//           console.error("Authentication error", error);
//         }
//       };

//       fetchToken();
//     }
//   }, [response]);

//   return (
//     <View
//       style={{
//         marginTop: 100,
//       }}
//     >
//       <Button
//         disabled={!request}
//         title="Login with Google"
//         onPress={() => {
//           promptAsync();
//         }}
//       />
//     </View>
//   );
// }
