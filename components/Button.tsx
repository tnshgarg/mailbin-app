import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "./Icon";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";

type IoniconsGlyphs = keyof typeof Ionicons.glyphMap;

const Button = ({
  onPress,
  title,
  icon,
}: {
  onPress: () => void;
  title: string;
  icon: IoniconsGlyphs;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}
    >
      <Icon name={icon} color={"red"} />
      <ThemedText style={{ color: "red", fontSize: 14 }}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

export default Button;

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
  },
  contentChild: {
    paddingLeft: 6,
    width: "70%",
  },
  content: {
    marginTop: 2,
    marginLeft: 24,
  },
  image: {
    width: 36,
    height: 36,
    objectFit: "cover",
    backgroundColor: "red",
  },
  h1: {
    fontWeight: 600,
    fontSize: 16,
    width: "70%",
  },
  h2: {
    fontWeight: 300,
    fontSize: 12,
    marginTop: -3,
  },
  pill: {
    paddingHorizontal: 8,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginLeft: -15,
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
