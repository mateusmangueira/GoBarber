import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Rotas de Login e Criacao de contas
import SignIn from '../pages/SignIn';
import SingUp from '../pages/SingUp';

//Rotas do usuario
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact componet={SignIn} />
      <Route path='/register' componet={SingUp} />
      <Route path='/dashboard' componet={Dashboard} />
      <Route path='/profile' componet={Profile} />
    </Switch>
  );
}
