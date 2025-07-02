// This is where your actual logic lives

const user = {
  userId: 'admin',
  password: '1234'
};

export const loginUser = (req, res) => {
  const { userId, password } = req.body; // this req.body is easily asscesible because of app.use(express.json()) and gets destructured here

  if (userId === user.userId && password === user.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
