import React, { useState } from "react";
import Background from "../components/Background";
import ButtonCadScreen from "../components/ButtonCadScreen";
import ButtonView from "../components/ButtonView";
import Form from "../components/FormView";
import Main from "../components/MainView";
import TextInputs from "../components/TextInputs";
import Title from "../components/Titles";
import { useAuth } from "../hooks/auth";
export default function CadScreen({ navigation }) {
  const { createUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Background>
      <Main>
        <Title title="OnePLUS"></Title>

        <Form>
          <TextInputs
            placeholder="Digite seu Nome.."
            nameIcon="account"
            eventOnchange={(text) => {
              setName(text);
            }}
          />
          <TextInputs
            placeholder="Digite Seu email.."
            nameIcon="email"
            eventOnchange={(text) => {
              setEmail(text);
            }}
          />
          <TextInputs
            placeholder="Digite uma senha Segura.."
            secureTextEntry={true}
            nameIcon="onepassword"
            eventOnchange={(text) => {
              setPassword(text);
            }}
          />
          <ButtonView>
            <ButtonCadScreen
              title="Cadastrar"
              actionOnPress={() => {
                createUser(name, email, password);
                navigation.navigate("Home");
              }}
            />
          </ButtonView>
        </Form>
      </Main>
    </Background>
  );
}
