import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "../components/Background";
import ButtonCadScreen from "../components/ButtonCadScreen";
import ButtonInput from "../components/ButtonInput";
import ButtonView from "../components/ButtonView";
import Form from "../components/FormView";
import Main from "../components/MainView";
import TextInputs from "../components/TextInputs";
import Title from "../components/Titles";

export default function CadScreen({ route }) {
  return (
    <Background>
      <Main>
        <Title title="OnePLUS"></Title>

        <Form>
          <TextInputs placeholder="Digite seu Nome.." />
          <TextInputs placeholder="Digite Seu email.." />
          <TextInputs
            placeholder="Digite uma senha Segura.."
            secureTextEntry={true}
          />
          <ButtonView>
            <ButtonCadScreen title="Cadastrar" />
          </ButtonView>
        </Form>
      </Main>
    </Background>
  );
}
