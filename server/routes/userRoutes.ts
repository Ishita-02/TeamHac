import express from 'express';
import authenticateJwt from '../middlewares';
import { createTeam } from '../controllers/teamControllers';

const router = express.Router();

router.post('/createTeam', authenticateJwt, createTeam); 


export default router;