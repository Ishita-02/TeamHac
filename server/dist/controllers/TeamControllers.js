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
exports.joinTeam = exports.createTeam = void 0;
const assert_1 = __importDefault(require("assert"));
const typebox_1 = require("@sinclair/typebox");
const teamModel_1 = __importDefault(require("../models/teamModel"));
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
function joinTeam({ username, place, skills, description, githubLink, email }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return {
                msg: "Team added",
                code: 200,
            };
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
exports.joinTeam = joinTeam;
