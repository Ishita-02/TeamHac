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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

const joinTeamModel = model("joinTeam", joinTeamSchema)

export default joinTeamModel