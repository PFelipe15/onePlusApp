import React from "react";
import { Text, View } from "react-native";
import Background from "../components/Background";
import Form from "../components/FormView";
import Main from "../components/MainView";
import Title from "../components/Titles";
import TextInputs from "../components/TextInputs";

import ButtonInput from "../components/ButtonInput";
import ButtonView from "../components/ButtonView";
export default function LoginScreen() {
  return (
    <Background>
      <Main>
        <Title title="ONEplus"></Title>
        <Form>
          <TextInputs placeholder="Email.." />
          <TextInputs placeholder="Senha.." secureTextEntry={true} />
          <ButtonView>
          <ButtonInput title="Entrar" />
          <ButtonInput title="Cadastrar" />
          </ButtonView>
          
        </Form>
      </Main>
    </Background>
  );
}
