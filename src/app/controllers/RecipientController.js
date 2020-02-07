import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      zip_code: Yup.string()
        .required()
        .max(15),
      street_address: Yup.string().required(),
      address_number: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      zip_code,
      street_address,
      address_number,
      other_information,
      city,
      state,
    } = await Recipient.create(req.body);
    return res.json({
      id,
      name,
      zip_code,
      street_address,
      address_number,
      other_information,
      city,
      state,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      zip_code: Yup.string()
        .required()
        .max(15),
      street_address: Yup.string().required(),
      address_number: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const recipient = await Recipient.findByPk(req.body.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists.' });
    }

    const {
      id,
      name,
      zip_code,
      street_address,
      address_number,
      other_information,
      city,
      state,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      zip_code,
      street_address,
      address_number,
      other_information,
      city,
      state,
    });
  }
}

export default new RecipientController();
