import usersModel from "../models/userModel"
import assert = require("assert")
import { functionReturn } from "../types";
import bcrypt from 'bcrypt'

export async function signUp({email, password}: {
    email: string,
    password: string
}): Promise<functionReturn> {
    try {
        var hashPassword = bcrypt.hashSync(password, 10);
        var user = await usersModel.create({email, password});
        assert(user, " Can't add user ");
        return {
            msg: "User added",
            code: 200,
        }
    } catch(error) {
        if (error instanceof assert.AssertionError) {
            return {
                msg: error.message,
                code: 401
            }
        }
        console.log(error)
        return {
            msg: "Error",
            code: 500
        }
    }
    
}