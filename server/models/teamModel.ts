import {Schema, model} from "mongoose";

const teamsSchema = new Schema({
    hackathonName: {
        type: String
    },
    teamName: {
        type: String
    },
    modeOfHackathon: {
        type: String,
        enum: ['Online', 'Offline', 'Both']
    },
    place: {
        type: String
    },
    skills: {
        type: String
    },
    description: {
        type: String
    },
    githubLink: {
        type: String
    },
    teamMembers: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    requestsToJoin: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    }
})

const teamsModel = model("teams", teamsSchema)

export default teamsModel