import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      attributes: ['id', 'name', 'provider'],
    });
    return res.json(users);
  }

  async store(req, res) {
    // Definindo as regras do objeto (req.body)
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .required()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    // when é uma validação condicional
    // primeiro param é a condição
    // field é a continuação dos atributos de verificação do campo password

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'User validation failed' });
    }

    const user = await User.findByPk(req.userId); // ?
    // Atributos que precisam de mais alguma etapa de verificação
    const { email, oldPassword } = req.body;

    // Se for inserido um email diferente (quiser ser alterado)
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: 'User already exist' });
      }
    }

    // Verificar se a senha passada eh igual a senha anterior
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Old password is invalid' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ id, name, email, provider });
  }

  async delete(req, res) {
    return res.json({});
  }
}
export default new UserController();
