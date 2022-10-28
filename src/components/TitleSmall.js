import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function TitleSmall({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: "20%",
    fontWeight: "bold"
  },
});
