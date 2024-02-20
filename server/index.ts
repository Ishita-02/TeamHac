import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import userRoutes from './routes/userRoutes';
import authenticateJwt from './middlewares/index';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
  
));

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World'});
});
app.use('/', authRoutes)
app.use('/auth', authenticateJwt, userRoutes)

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

const MONGO_URL = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(MONGO_URL!, { dbName: "TeamHac" });
