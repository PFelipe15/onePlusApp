import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import CadScreen from "./CadScreen";
import HomeScreen from "./HomeScreen";
const Stack = createNativeStackNavigator();
export default function RoutesApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Bem-Vindo",
            headerStyle: {
              backgroundColor: "#0BBBC5",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadScreen}
          options={{
            title: "Bem-Vindo",
            headerStyle: {
              backgroundColor: "#0BBBC5",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
