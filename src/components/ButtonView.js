import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Title from "./Titles";

export default function ButtonView({ children }) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    textAlign:"center"
  },
});
