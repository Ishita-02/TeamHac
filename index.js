const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const SECRET = 'SECr3t'; 

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  email: {type: String},
  password: String,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }]
});

const teamSchema = new mongoose.Schema({
  hackathonName: String,
  teamName: String,
  description: String,
  modeOfHackathon: String,
  country: String,
  published: Boolean
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Connect to MongoDB
mongoose.connect('mongodb+srv://ishitagrawal0207:lpdNBhlHhN8cuoER@cluster0.hg0xkl5.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
