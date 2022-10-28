import { View, Text, StyleSheet } from "react-native";
import Title from "./Titles";

export default function Main({ children }) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    width: "85%",

    marginTop: "30%",
    marginBottom: "10%",
  },
});
