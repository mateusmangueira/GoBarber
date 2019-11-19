import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import Notifications from '~/components/Notifications'

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarberPurple" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Nome do provider</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="AvatarPerfil" />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
