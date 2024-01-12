const express = require('express');
import * as userControllers from '../controllers/userControllers';
import authenticateJwt from '../middlewares';
import { z } from "zod";

const app = express();
const router = app.Router();

interface signupInput  {
    email: string,
    password: string
}
//type signupInput = z.infer<typeof signupInput>;

router.post('/signup', authenticateJwt, (request: Request, reply: Response) => {
    // const input = signupInput.parse({ email, password }) 
    // const {input} = request.body
    // const {email, password} = signupInput
    // const password = signupInput.shape.password
    //const {email, signupInput.shape.password}
    var { email, password } = request.body
    var data = userControllers.signUp({ email, password });
   // reply.status(data.code).send({msg: data.msg})
})



export default router;

