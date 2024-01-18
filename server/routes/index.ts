import express from 'express';
import * as userControllers from '../controllers/userControllers';
import authenticateJwt from '../middlewares';
import { signup } from '../controllers/userControllers'; // Import the signup function

const router = express.Router();

router.post('/signup', userControllers.signup); // Use the exported signup function

export default router;

