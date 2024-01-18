import express from 'express';
import { createTeam, joinTeamCreate } from '../controllers/teamControllers';

const router = express.Router();

router.post('/createTeam', createTeam); 
router.post('/joinTeam', joinTeamCreate);


export default router;