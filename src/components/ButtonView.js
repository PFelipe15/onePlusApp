import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Title from "./Titles";

export default function ButtonView({ children, typeflexDirecion }) {
  return <View style={styles.buttonView}>{children}</View>;
}

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
});
