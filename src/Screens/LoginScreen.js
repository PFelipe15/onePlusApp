import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Form from "../components/FormView";
import Main from "../components/MainView";
import Title from "../components/Titles";
import TextInputs from "../components/TextInputs";
import ButtonInput from "../components/ButtonInput";
import ButtonView from "../components/ButtonView";
export default function LoginScreen({ navigation }) {
  const [name, setname] = useState("");
  return (
    <Background>
      <Main>
        <Title title="ONEplus"></Title>
        <Form>
          <TextInputs placeholder="Email.." nameIcon={"email"} />
          <TextInputs
            placeholder="Senha.."
            secureTextEntry={true}
            nameIcon={"onepassword"}
            
          />
          <ButtonView>
            <ButtonInput
              title="Entrar"
              actionOnPress={() => {
                navigation.navigate("Home", { name: data });
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
