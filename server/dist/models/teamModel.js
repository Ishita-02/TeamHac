"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamsSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users'
    },
    requestsToJoin: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'users'
    }
});
const teamsModel = (0, mongoose_1.model)("teams", teamsSchema);
exports.default = teamsModel;
