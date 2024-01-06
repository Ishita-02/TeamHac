import {Schema, model} from "mongoose";

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    hashPassword: {
        type: String
    },
    skills: {
        type: [String]
    },
    githubLink: {
        type: String
    },
    joinTeam: {
        type: Schema.Types.ObjectId,
        ref: 'joinTeam'
    }
})

const usersModel = model("users", usersSchema)

export default usersModel