"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const joinTeamSchema = new mongoose_1.Schema({
    username: {
        type: String
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
    email: {
        type: String
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users'
    },
    inviteRequests: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'teams'
    }
});
const joinTeamModel = (0, mongoose_1.model)("joinTeam", joinTeamSchema);
exports.default = joinTeamModel;
