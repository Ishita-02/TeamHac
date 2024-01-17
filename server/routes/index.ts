const express = require('express');
import * as userControllers from '../controllers/userControllers';
import authenticateJwt from '../middlewares';
import { z } from "zod";

const app = express();
const router = app.Router();


router.post('/signup', userControllers.signUp);



export default router;

