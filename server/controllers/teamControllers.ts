import assert from "assert"
import {Type as T} from '@sinclair/typebox'
import teamsModel from "../models/teamModel";
import joinTeamModel from "../models/joinTeamModel";

export async function createTeam( req: typeof createTeamSchema, res: any, next: any) {
    try {
        const userId = req.headers["userId"];
        assert(userId, "User does not exists")
        const { hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink } = req.body;
        var team = teamsModel.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink, teamMembers: userId });
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
        const userId = req.headers["userId"];
        assert(userId, "User does not exists")
        const { username, place, skills, description, githubLink, email } = req.body;
        const emailCheck = await joinTeamModel.exists({ email: email });
        if (emailCheck) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        var team = joinTeamModel.create({ username, place, skills, description, githubLink, email, userId: userId });
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

export async function requestToJoin(req: typeof requestToJoinSchema, res: any, next: any) {
    try {
        const userId = req.headers["userId"];
        const { teamId } = req.body;
        const team = await teamsModel.exists({ _id: teamId });
        assert(team, "Team does not exist");
        const requestAlreadySent = await teamsModel.exists({ _id: teamId, requestsToJoin: userId });
        assert(!requestAlreadySent, " Request already sent ")
        await teamsModel.updateOne({ _id: teamId }, { $push: { requestsToJoin: userId } });
        return res.status(200).json({ message: 'Request sent' });
    }
    catch (error) {
        console.log(error)
        if (error instanceof assert.AssertionError) {
            return res.status(401).json({
                msg: error.message,
                code: 401
            });
        }
        return res.status(500).json({
            msg: "Error",
            code: 500
        });
    }
    
}

const requestToJoinSchema = T.Object({
    teamId: T.String(),
    userId: T.String()
})

export async function invite(req: typeof inviteSchema, res: any, next: any) {
    try {
        const userId = req.headers["userId"];
        assert(userId, "User not logged in")
        const usersTeamId = await teamsModel.findById({ teamMembers: userId });
        assert(usersTeamId, " Team does not exist for this user")
        const { joinTeamId } = req.body;
        const team = await joinTeamModel.exists({ _id: joinTeamId });
        assert(team, "Team does not exist");
        // // Check whether the user which is invited is already in a team or not
        // const teamMembers = Array.isArray(usersTeamId?.teamMembers) ? usersTeamId?.teamMembers.map(member => member.toString()) : [];
        // for(let i = 0; i < teamMembers.length; i++) {
        //     const user = await teamsModel.exists({ _id: teamMembers[i] });
        //     assert(!user, "User already in a team")
        // }
        await joinTeamModel.updateOne({ _id: joinTeamId }, { $push: { inviteRequests: userId } });
        return res.status(200).json({ message: 'Invite sent' });
    }
    catch (error) {
        if (error instanceof assert.AssertionError) {
            return res.status(401).json({
                msg: error.message,
                code: 401
            });
        }
        return res.status(500).json({
            msg: "Error",
            code: 500
        });
    }    
}

const inviteSchema = T.Object({
    joinTeamId: T.String(),
    userId: T.String()
})
