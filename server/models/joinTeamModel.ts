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
    email: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    inviteRequests: {
        type: [Schema.Types.ObjectId],
        ref: 'teams'
    }
})

const joinTeamModel = model("joinTeam", joinTeamSchema)

export default joinTeamModel