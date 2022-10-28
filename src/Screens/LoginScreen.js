import React from "react";
import { Text, View, Style, StyleSheet } from "react-native";
import Background from "../components/Background";
import Form from "../components/FormView";
import Main from "../components/MainView";
import Title from "../components/Titles";
import TextInputs from "../components/TextInputs";
import ButtonInput from "../components/ButtonInput";
import ButtonView from "../components/ButtonView";
export default function LoginScreen({ navigation }) {
  return (
    <Background>
      <Main>
        <Title title="ONEplus"></Title>
        <Form>
          <TextInputs placeholder="Email.." />
          <TextInputs placeholder="Senha.." secureTextEntry={true} />
          <ButtonView>
            <ButtonInput
              title="Entrar"
              actionOnPress={() => {
                navigation.navigate("Home", { name:"Usuario01"});
              }}
            />
            <ButtonInput
              title="Cadastrar"
              actionOnPress={() => {
                navigation.navigate("Cadastro");
              }}
            />
          </ButtonView>
        </Form>
      </Main>
    </Background>
  );
}
