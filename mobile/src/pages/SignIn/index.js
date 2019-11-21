import React from 'react';

import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn() {

  async function handleSingUp() {

  }

  async function handleSubmit() {

  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => { handleSubmit }}>
            Entrar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => { handleSingUp }}>
          <SignLinkText>
            Criar sua conta gratuita
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
