import { UserList } from '../models/LoginModels.js'

export const getUserList = async (req, res) => {
  try {
    const raw = req.query.data;

    const { name, pass } = JSON.parse(raw); // parse first!
    console.log(name, pass); // sri 10

    res.send('API ended');
  } catch (err) {
    res.status(400).json({ error: 'Invalid JSON format in query param' });
  }
};
