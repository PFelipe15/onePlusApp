import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons/";
export default function TextInputs({
  placeholder,
  secureTextEntry,
  nameIcon,
  eventOnchange
}) {

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="white"
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onChangeText={eventOnchange}
        >

      </TextInput>
      <Icon name={nameIcon} size={28} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginTop: 30,
    height: 40,
    backgroundColor: "#0BBBC7",
    borderRadius: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    top: 35,
    left: 14,
    color: "white",
  },
});
