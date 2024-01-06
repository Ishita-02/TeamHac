import {Schema, model} from "mongoose";

const joinTeamSchema = new Schema({
    
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
    }
})

const joinTeamModel = model("joinTeam", joinTeamSchema)

export default joinTeamModel