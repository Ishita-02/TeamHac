import express from 'express';
import { createTeam, invite, joinTeamCreate, requestToJoin, getTeams, getJoinTeams } from '../controllers/teamControllers';

const router = express.Router();

router.post('/createTeam', createTeam); 
router.post('/joinTeam', joinTeamCreate);
router.post('/requestToJoin', requestToJoin);
router.post('/invite', invite)
router.get('/getTeams', getTeams)
router.get('/getJoinTeams', getJoinTeams)

export default router;