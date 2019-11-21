import React from 'react';

import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Seu nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu melhor e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha mais segura"
          />

          <SubmitButton onPress={() => { }}>
            Entrar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>
            Já possui conta?
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
