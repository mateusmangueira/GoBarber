import React, { useRef } from 'react';

import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>

          <FormInput
            icon="person-outline"
            autoCorrect={false}
            placeholder="Seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu melhor e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha mais segura"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possui conta?</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}