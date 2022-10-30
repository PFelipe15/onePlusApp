import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Form from "../components/FormView";
import Main from "../components/MainView";
import Title from "../components/Titles";
import TextInputs from "../components/TextInputs";
import ButtonInput from "../components/ButtonInput";
import { useAuth } from "../hooks/auth";
import ButtonView from "../components/ButtonView";
export default function LoginScreen({ navigation }) {
  const { email,password, setEmail, setPassword, login } = useAuth();

  return (
    <Background>
      <Main>
        <Title title="ONEplus"></Title>
        <Form>
          <TextInputs
            placeholder="Email.."
            nameIcon={"email"}
            eventOnchange={(text) => {
              setEmail(text);
            }}
          />
          <TextInputs
            placeholder="Senha.."
            secureTextEntry={true}
            nameIcon={"onepassword"}
            eventOnchange={(text) => {
              setPassword(text);
            }}
          />
          <ButtonView>
            <ButtonInput
              title="Entrar"
              actionOnPress={() => {
                navigation.navigate("Home")
                
                
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
