import React from "react";
import Background from "../components/Background";
import ButtonCadScreen from "../components/ButtonCadScreen";
import ButtonView from "../components/ButtonView";
import Form from "../components/FormView";
import Main from "../components/MainView";
import TextInputs from "../components/TextInputs";
import Title from "../components/Titles";
import { useAuth } from "../hooks/auth";
export default function CadScreen({ navigation }) {
  const { login } = useAuth();
  return (
    <Background>
      <Main>
        <Title title="OnePLUS"></Title>

        <Form>
          <TextInputs placeholder="Digite seu Nome.." nameIcon="account"/>
          <TextInputs placeholder="Digite Seu email.." nameIcon="email" />
          <TextInputs
            placeholder="Digite uma senha Segura.."
            secureTextEntry={true}
            nameIcon="onepassword"
          />
          <ButtonView>
            <ButtonCadScreen
              title="Cadastrar"
              actionOnPress={() => {
                navigation.navigate("Home");
               
              }}
            />
          </ButtonView>
        </Form>
      </Main>
    </Background>
  );
}
