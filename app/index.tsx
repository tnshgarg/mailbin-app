import { Redirect } from "expo-router";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Index = () => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "288556331838-pv18scatla236etu1gon3mnjlgfqtupl.apps.googleusercontent.com", // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  //     scopes: [
  //       "https://www.googleapis.com/auth/gmail.readonly",
  //       "https://www.googleapis.com/auth/userinfo.profile",
  //       "https://www.googleapis.com/auth/userinfo.email",
  //     ], // what API you want to access on behalf of the user, default is email and profile
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //     iosClientId:
  //       "288556331838-8g53pe6dsmhqk2gilns8134tlqldmm1o.apps.googleusercontent.com", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  //   });
  return <Redirect href="/signin" />;
};
export default Index;
