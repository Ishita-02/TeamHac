const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const authRoutes = require('./routes/index.ts');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const SECRET = 'SECr3t'; 


app.use('signup', authRoutes)


// Connect to MongoDB
mongoose.connect('mongodb+srv://ishitagrawal0207:lpdNBhlHhN8cuoER@cluster0.hg0xkl5.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
