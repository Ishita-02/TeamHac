import express from 'express';
import { createTeam, invite, joinTeamCreate, requestToJoin } from '../controllers/teamControllers';

const router = express.Router();

router.post('/createTeam', createTeam); 
router.post('/joinTeam', joinTeamCreate);
router.post('/requestToJoin', requestToJoin);
router.post('/invite', invite)


export default router;