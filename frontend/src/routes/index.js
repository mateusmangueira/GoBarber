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
      <Route path='/' exact component={SignIn} />
      <Route path='/register' component={SingUp} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
}
