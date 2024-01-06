import {Schema, model} from "mongoose";

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    skills: {
        type: [String]
    },
    githubLink: {
        type: String
    },
    teams: {
        type: Schema.Types.ObjectId,
        ref: 'teams'
    }
})

const usersModel = model("users", usersSchema)

export default usersModel