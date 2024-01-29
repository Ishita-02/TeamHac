import express from 'express';
import { createTeam, invite, joinTeamCreate, requestToJoin, getTeams, getJoinTeams } from '../controllers/teamControllers';
import { me } from '../controllers/userControllers';

const router = express.Router();

router.post('/createTeam', createTeam); 
router.post('/joinTeam', joinTeamCreate);
router.post('/requestToJoin', requestToJoin);
router.post('/invite', invite)
router.get('/getTeams', getTeams)
router.get('/getJoinTeams', getJoinTeams)
router.get('/me', me)

export default router;