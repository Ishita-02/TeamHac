"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinTeamCreate = exports.createTeam = void 0;
const assert_1 = __importDefault(require("assert"));
const typebox_1 = require("@sinclair/typebox");
const teamModel_1 = __importDefault(require("../models/teamModel"));
const joinTeamModel_1 = __importDefault(require("../models/joinTeamModel"));
function createTeam(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink } = req.body;
            var team = teamModel_1.default.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink });
            (0, assert_1.default)(team, " Can't add team ");
            res.json({ message: 'Team added' });
        }
        catch (error) {
            if (error instanceof assert_1.default.AssertionError) {
                return {
                    msg: error.message,
                    code: 401
                };
            }
            return {
                msg: "Error",
                code: 500
            };
        }
    });
}
exports.createTeam = createTeam;
const createTeamSchema = typebox_1.Type.Object({
    hackathonName: typebox_1.Type.String(),
    teamName: typebox_1.Type.String(),
    modeOfHackathon: typebox_1.Type.String(),
    place: typebox_1.Type.String(),
    skills: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    githubLink: typebox_1.Type.String()
});
function joinTeamCreate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, place, skills, description, githubLink, email } = req.body;
            var team = joinTeamModel_1.default.create({ username, place, skills, description, githubLink, email });
            (0, assert_1.default)(team, " Can't add team ");
            res.json({ message: 'Team added' });
        }
        catch (error) {
            if (error instanceof assert_1.default.AssertionError) {
                return {
                    msg: error.message,
                    code: 401
                };
            }
            return {
                msg: "Error",
                code: 500
            };
        }
    });
}
exports.joinTeamCreate = joinTeamCreate;
const joinTeamCreateSchema = typebox_1.Type.Object({
    username: typebox_1.Type.String(),
    place: typebox_1.Type.String(),
    skills: typebox_1.Type.String(),
    description: typebox_1.Type.String(),
    githubLink: typebox_1.Type.String(),
    email: typebox_1.Type.String()
});
