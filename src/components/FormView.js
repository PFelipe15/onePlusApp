import React from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-web";
import Title from "./Titles";

export default function Form({ children }) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    textAlign: "center",
  },
});
