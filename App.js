import React from "react";
import { Text } from "react-native";
import { AuthProvider } from "./src/hooks/auth";
import RoutesApp from "./src/Screens/Routes";

export default function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}
