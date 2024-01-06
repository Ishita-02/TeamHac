import usersModel from "../models/userModel"
import assert = require("assert")
import { functionReturn } from "../types";
import bcrypt from 'bcrypt'
import teamsModel from "../models/teamModel";

export async function signUp({email, password}: {
    email: string,
    password: string
}): Promise<functionReturn> {
    try {
        var hashPassword = bcrypt.hashSync(password, 10);
        var user = await usersModel.create({email, hashPassword});
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
        return {
            msg: "Error",
            code: 500
        }
    }
}

export async function login({email, password}: {
    email: string,
    password: string
}): Promise<functionReturn> {
    try {
        var user = await usersModel.findOne({ email });
        assert(user, " User not found ");
        var valid = bcrypt.compareSync(password, user.hashPassword!)
        if(valid) {
            return {
                msg: "Login successful",
                code: 200,
                data: {
                    email: user.email,
                }
            }
        }
        else {
            return {
                msg: "Login failed",
                code: 401
            }
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
}): Promise<functionReturn> {
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
}): Promise<functionReturn> {
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