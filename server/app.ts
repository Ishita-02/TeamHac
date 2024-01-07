import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Body parser middleware
app.use(express.json());

const mongoURI = process.env.MONGO_URL as string;

interface CustomConnectOptions extends ConnectOptions {
    useNewUrlParser?: boolean;
}
const mongoOptions: CustomConnectOptions = {
    useNewUrlParser: true, // MongoDB Node.js driver option
    //useUnifiedTopology: true, // MongoDB Node.js driver option
  };
mongoose.connect(mongoURI)
.then(() => {
    console.log("DB Connected")
  }).catch(() => {
    console.log("Can't connect to DB")
    process.exit(0)
})
