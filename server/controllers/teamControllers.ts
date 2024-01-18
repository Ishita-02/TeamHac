import assert from "assert"
import {Type as T} from '@sinclair/typebox'
import teamsModel from "../models/teamModel";
import joinTeamModel from "../models/joinTeamModel";

export async function createTeam( req: typeof createTeamSchema, res: any, next: any) {
    try {
        const { hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink } = req.body;
        var team = teamsModel.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink });
        assert( team, " Can't add team ");
        res.json({ message: 'Team added' })
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

const createTeamSchema = T.Object({
    hackathonName: T.String(),
    teamName: T.String(),
    modeOfHackathon: T.String(),
    place: T.String(),
    skills: T.String(),
    description: T.String(),
    githubLink: T.String()
})

export async function joinTeamCreate( req: typeof joinTeamCreateSchema, res: any, next: any) {
    try {
        const { username, place, skills, description, githubLink, email } = req.body;
        var team = joinTeamModel.create({ username, place, skills, description, githubLink, email });
        assert( team, " Can't add team ");
        res.json({ message: 'Team added' })
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

const joinTeamCreateSchema = T.Object({
    username: T.String(),
    place: T.String(),
    skills: T.String(),
    description: T.String(),
    githubLink: T.String(),
    email: T.String()
})