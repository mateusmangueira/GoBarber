import User from '../models/User';

class UserController {
  async index(req, res) {
    // Completar a logica de retornar todos os usuarios
    return res.json();
  }

  async show(req, res) {
    // Completar logica de retornar apenas um unico usuario pelo ID
    return res.json();
  }

  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    // Completar a logica de atualizar um usuario pelo ID
    return res.json();
  }

  async delete(req, res) {
    // Completar a logica de deletar um usuario pelo ID
    return res.json();
  }
}

export default new UserController();
