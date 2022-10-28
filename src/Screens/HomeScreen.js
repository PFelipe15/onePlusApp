import React from "react";
import Background from "../components/Background";
import Main from "../components/MainView";
import TitleSmall from "../components/TitleSmall";

export default function HomeScreen({ route }) {
  return (
    <Background>
      <Main>
        <TitleSmall title={"Seja Bem Vindo!"+route.params.name}></TitleSmall>
      </Main>
    </Background>
  );
}
