import React from "react";
import Background from "../components/Background";
import ButtonInput from "../components/ButtonInput";
import Logout from "../components/CompStatic/Logout";
import TitleSmall from "../components/TitleSmall";
import { useAuth } from "../hooks/auth";
import TextInputs from "../components/TextInputs";
export default function HomeScreen({ navigation }) {
  const { logout, email, password, name } = useAuth();
  return (
    <Background>
      <Logout
        eventOnpres={() => {
          navigation.navigate("Login");
          logout();
        }}
      />

      <TitleSmall title={"Seja Bem Vindo!" + name}></TitleSmall>
    </Background>
  );
}
