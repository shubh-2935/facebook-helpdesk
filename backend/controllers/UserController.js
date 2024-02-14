// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

module.exports = {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }
    //   // Hash password
    //   const hashedPassword = await bcrypt.hash(password, 10);
      // Create new user
      user = new User({ username, email, password });
      await user.save();
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      // Check password
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (!isMatch) {
    //     return res.status(400).json({ error: 'Invalid credentials' });
    //   }
      if(user.password !== password){
        return res.status(400).json({ error: 'Invalid credentials' });        
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
};
