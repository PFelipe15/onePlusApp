import React from "react";
import Background from "../components/Background";
import Logout from "../components/CompStatic/Logout";
import Main from "../components/MainView";
import TitleSmall from "../components/TitleSmall";
import { useAuth } from "../hooks/auth";
export default function HomeScreen({navigation}) {
  const { logout } = useAuth();
  return (
    <Background>
      <Logout
        eventOnpres={() => {
          navigation.navigate("Login");
          logout();
        }}
      />
      <TitleSmall title={"Seja Bem Vindo!"}></TitleSmall>
    </Background>
  );
}
