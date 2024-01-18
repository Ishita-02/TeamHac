"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
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
    jointeamId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'joinTeam'
    },
    createTeamId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'teams'
    }
});
const usersModel = (0, mongoose_1.model)("users", usersSchema);
exports.default = usersModel;
