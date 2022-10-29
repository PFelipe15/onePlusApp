import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons/";

export default function Logout({eventOnpres}) {
 
  return (
    <View style={styles.viewLogout}>
      <TouchableOpacity style={styles.button} onPress={eventOnpres}>
        <Icon name="logout-variant" size={40} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewLogout: {
    marginTop: 50,

    width: "100%",
    height: 60,
  },
  icon: {
    position: "absolute",
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 20,

    marginLeft: 360,
  },
});
