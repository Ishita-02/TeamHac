import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import userRoutes from './routes/userRoutes';
import authenticateJwt from './middlewares/index';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["https://team-hac.vercel.app"],
        methods: ["GET", "POST"],
        credentials: true
    }
));

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World'});
});
app.use('/', authRoutes)
app.use('/auth', authenticateJwt, userRoutes)

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
// Connect to MongoDB
mongoose.connect('mongodb+srv://ishitagrawal0207:lpdNBhlHhN8cuoER@cluster0.hg0xkl5.mongodb.net/TeamHac', { dbName: "TeamHac" });
