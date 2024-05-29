// import { useState } from "react";
// import {
//   Image,
//   Platform,
//   StyleSheet,
//   TouchableOpacity,
//   useColorScheme
// } from "react-native";

// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { openBrowserAsync } from "expo-web-browser";
// import { Icon } from "./Icon";

// export function ListItem({
//   title,
//   email,
//   numberOfEmails,
//   unsubscribeLink,
//   companyLogo,
// }: {
//   title: string;
//   email: string;
//   numberOfEmails: number;
//   unsubscribeLink: string;
//   companyLogo: string;
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const theme = useColorScheme() ?? "light";

//   const unsubscribe = async (href: string) => {
//     if (Platform.OS !== "web") {
//       await openBrowserAsync(href);
//     }
//   };

//   return (
//     <ThemedView style={styles.parent}>
//       <TouchableOpacity
//         style={styles.heading}
//         onPress={() => setIsOpen((value) => !value)}
//         activeOpacity={0.9}
//       >
//         <ThemedView style={styles.childHeading}>
//           <Image source={{ uri: companyLogo }} style={styles.image} />
//           <ThemedView style={styles.contentChild}>
//             <ThemedText type="defaultSemiBold" style={styles.h1}>
//               {title}
//             </ThemedText>
//             <ThemedText style={styles.h2} type="default">
//               {email}
//             </ThemedText>
//           </ThemedView>
//         </ThemedView>
//         <ThemedView style={styles.pill}>
//           <ThemedText style={styles.pillText}>
//             {numberOfEmails} Emails
//           </ThemedText>
//         </ThemedView>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => unsubscribe(unsubscribeLink)}
//       >
//         <Icon name="notifications-off-outline" color={"red"} />
//         <ThemedText style={{ color: "red", fontSize: 14 }}>
//           Unsubscribe
//         </ThemedText>
//       </TouchableOpacity>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   parent: {
//     borderWidth: 1,
//     borderColor: "lightgray",
//     borderStyle: "solid",
//     paddingVertical: 14,
//     paddingHorizontal: 14,
//     borderRadius: 10,
//   },
//   heading: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   childHeading: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   contentChild: {
//     paddingLeft: 6,
//   },
//   content: {
//     marginTop: 2,
//     marginLeft: 24,
//   },
//   image: {
//     width: 36,
//     height: 36,
//     objectFit: "contain",
//     backgroundColor: "white",
//   },
//   h1: {
//     fontWeight: 600,
//     fontSize: 16,
//   },
//   h2: {
//     fontWeight: 300,
//     fontSize: 12,
//     marginTop: -3,
//   },
//   pill: {
//     paddingHorizontal: 8,
//     backgroundColor: "lightgray",
//     borderRadius: 10,
//   },
//   pillText: {
//     fontSize: 14,
//   },
//   button: {
//     borderColor: "red",
//     borderWidth: 1,
//     borderBottomWidth: 2,
//     borderStyle: "solid",
//     borderRadius: 6,
//     padding: 3,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 12,
//   },
// });

import { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { urlParser } from "@/helpers/urlParser";
import { openBrowserAsync } from "expo-web-browser";
import { Icon } from "./Icon";

export function ListItem({
  title,
  email,
  numberOfEmails,
  unsubscribeLink,
  companyLogo,
}: {
  title: string;
  email: string;
  numberOfEmails: number;
  unsubscribeLink: string;
  companyLogo: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  const unsubscribe = async (href: string) => {
    const url = urlParser(href)
    console.log("href: ", href)
    if (Platform.OS !== "web" && url) {
      console.log("browser: ", url)
      await openBrowserAsync(url);
    }
  };

  return (
    <ThemedView style={styles.parent}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.9}
      >
        <ThemedView style={styles.childHeading}>
          <Image source={{ uri: companyLogo }} style={styles.image} />
          <ThemedView style={styles.contentChild}>
            <ThemedText type="defaultSemiBold" style={styles.h1}>
              {title}
            </ThemedText>
            <ThemedText ellipsizeMode="tail" numberOfLines={1} style={styles.h2} type="default">
              {email}
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <View>
          <ThemedView style={styles.pill}>
            <ThemedText style={styles.pillText}>
              {numberOfEmails} Emails
            </ThemedText>
          </ThemedView>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => unsubscribe(unsubscribeLink)}
      >
        <Icon name="notifications-off-outline" color={"red"} />
        <ThemedText style={{ color: "red", fontSize: 14 }}>
          Unsubscribe
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderStyle: "solid",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  childHeading: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1
  },
  contentChild: {
    paddingLeft: 6,
    flexShrink: 1
  },
  content: {
    marginTop: 2,
    marginLeft: 24,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  h1: {
    fontWeight: "600",
    fontSize: 16,
  },
  h2: {
    fontWeight: "300",
    fontSize: 12,
    marginTop: -3,
  },
  pill: {
    paddingHorizontal: 8,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  pillText: {
    fontSize: 14,
  },
  button: {
    borderColor: "red",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderRadius: 6,
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
});
