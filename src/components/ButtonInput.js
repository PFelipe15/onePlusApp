import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function ButtonInput({ title, actionOnPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={actionOnPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0BBBC5",
    width: 120,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    margin: "9%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "Black",
  },
});
