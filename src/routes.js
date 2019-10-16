import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Mateus Mangueira',
    email: 'mateus.mangueira14@gmail.com',
    password_hash: '123321',
  });
  return res.json(user);
});
export default routes;
