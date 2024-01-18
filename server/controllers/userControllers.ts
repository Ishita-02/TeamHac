import usersModel from "../models/userModel"
import assert from "assert"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import teamsModel from "../models/teamModel";
import {Type as T} from '@sinclair/typebox'
require('dotenv').config();

const secret = process.env.SECRET;

export async function signup(req: typeof signupSchema, res: any, next: any) {    
    try {
        var { email, password } = req.body;
        var hashPassword = bcrypt.hashSync(password, 10);
        const emailCheck = await usersModel.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        var user = await usersModel.create({ email, hashPassword});
        const token = jwt.sign({ id: user._id, email: user.email, role: 'user' }, secret ?? '', { expiresIn: '1h' });
        return res.json({ message: 'User created successfully', token });
    } catch(error) {
        next()
    }
}

const signupSchema = T.Object({
    email: T.String(),
    password: T.String()
})

export async function login(req: typeof signupSchema, res: any, next: any) {
    try {
        var { email, password } = req.body;
        var user = await usersModel.findOne({ email });
        assert(user, " User not found ");
        var valid = bcrypt.compareSync(password, user.hashPassword!)
        if (valid) {
            const token = jwt.sign({ id: user._id, email: user.email, role: 'user'  }, secret ?? '', { expiresIn: '1h' });
            res.json({ message: 'Logged in successfully', token });
        } else {
            res.status(403).json({ message: 'Invalid username or password' });
        }
    } catch(error) {
        if (error instanceof assert.AssertionError) {
            return {
                msg: error.message,
                code: 401
            }
        }
        return {
            msg: "Error",
            code: 500
        }
    }
}

export async function createTeam({hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink}: {
    hackathonName: string,
    teamName: string,
    modeOfHackathon: string,
    place: string,
    skills: string,
    description: string,
    githubLink: string
}) {
    try {
        var team = teamsModel.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink });
        assert( team, " Can't add team ");
        return {
            msg: "Team added",
            code: 200,
        }
    } catch(error) {
        if (error instanceof assert.AssertionError) {
            return {
                msg: error.message,
                code: 401
            }
        }
        return {
            msg: "Error",
            code: 500
        }
    }
}

export async function joinTeam({ username, place, skills, description, githubLink, email}: {
    username: string,
    place: string,
    skills: string,
    description: string,
    githubLink: string,
    email: string
}) {
    try {
        
        return {
            msg: "Team added",
            code: 200,
        }
    } catch(error) {
        if (error instanceof assert.AssertionError) {
            return {
                msg: error.message,
                code: 401
            }
        }
        return {
            msg: "Error",
            code: 500
        }
    }
}

