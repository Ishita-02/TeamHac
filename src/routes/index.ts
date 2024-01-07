const express = require('express');
import * as userControllers from '../controllers/userControllers';
import authenticateJwt from '../middlewares';

const app = express();
const router = app.Router();

router.post('/signup', authenticateJwt, async function (request: { body: { email: string; password: string; }; }, reply: { code: (arg0: number) => { (): any; new(): any; send: { (arg0: { msg: string; }): void; new(): any; }; }; }) {
    var { email, password } = request.body
    var data = await userControllers.signUp({ password, email });
    reply.code(data.code).send({msg: data.msg})
})

export default router;

