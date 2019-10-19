import Appointment from '../models/Appointment';
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schemas/Notification';
import * as Yup from 'yup';

class AppointmentController {

  async index(req, res) {
    const { page = 1 } = req.query;


    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [{
        model: User,
        as: 'provider',
        attributes: ['id', 'name'],
        include: [{
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url']
        }]
      }]
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Appointment validation failed' })
    }
    const { provider_id, date } = req.body;

    // Checa se o usuario eh realmente um prestador de servico
    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });


    //Se ele n for provider lanca erro.
    if (!isProvider) {
      return res.status(401).json({ error: 'You can only create appointments with providers' })
    }

    const hourStart = startOfHour(parseISO(date));

    //Usa a biblioteca date-fns para checar se a data do agendamento eh realmente no futuro. Nao permite datas passadas. 
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not allowed' })
    }

    const checkAvailability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    })

    //Checha se o provider tem disponibilidade para o agendamento do usuario
    if (checkAvailability) {
      return res.status(400).json({
        error: 'Appointment date is not available'
      })
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    });


    //Notificar o prestador do servico
    const user = await User.findByPk(req.userId);
    const formattedDate = format(hourStart, "'dia' dd 'de' MMMM', às' H:mm'h", {
      locale: pt
    });

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();