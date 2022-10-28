import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import Main from "./MainView";

export default function Background({children}) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.imageBack}
        source={require("../uploads/17973908.jpg")}
      >
      {children}
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  imageBack: {
    width: "100%",
    height: "100%",
    alignItems: "center",
   
  },
});
