import React from "react";
import { TextInput, StyleSheet, Text } from "react-native";

export default function TextInputs({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      placeholderTextColor="white"
      style={styles.input}
      placeholder={placeholder}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginTop: 60,
    height: 50,
    backgroundColor: "#0BBBC7",
    borderRadius: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight:'bold',
   
  },
});
