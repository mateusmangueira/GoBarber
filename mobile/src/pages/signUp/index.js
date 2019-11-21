import React from 'react';

import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
        <FormInput
            icon="name-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

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
            placeholder="Sua senha segura"
          />

          <SubmitButton onPress={() => { }}>
            Entrar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => { }}>
          <SignLinkText>
            Criar sua conta gratuita
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
