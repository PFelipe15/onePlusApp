import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonInput({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0BBBC7",
    width: 120,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    margin: 28,
  },
  title: {
    fontSize: 22,
  },
});
