import assert from "assert"
import {Type as T} from '@sinclair/typebox'
import teamsModel from "../models/teamModel";

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