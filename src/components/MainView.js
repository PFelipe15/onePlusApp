import { View, Text, StyleSheet } from "react-native";
import Title from "./Titles";

export default function Main({ children }) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height:'80%',
    marginTop: "30%",
    marginBottom: "10%",
    alignItems: "center",
    
   
  },
});
