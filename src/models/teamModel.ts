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
    }
})

const teamsModel = model("teams", teamsSchema)

export default teamsModel