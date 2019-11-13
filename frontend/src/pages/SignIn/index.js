import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSingIn(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber Logo" />
      <Form onSubmit={handleSingIn}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha mais segura"
        />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar sua conta</Link>
      </Form>
    </>
  );
}
