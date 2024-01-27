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
exports.getJoinTeams = exports.getTeams = exports.invite = exports.requestToJoin = exports.joinTeamCreate = exports.createTeam = void 0;
const assert_1 = __importDefault(require("assert"));
const typebox_1 = require("@sinclair/typebox");
const teamModel_1 = __importDefault(require("../models/teamModel"));
const joinTeamModel_1 = __importDefault(require("../models/joinTeamModel"));
function createTeam(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.headers["userId"];
            (0, assert_1.default)(userId, "User does not exists");
            const { hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink } = req.body;
            var team = teamModel_1.default.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink, teamMembers: userId });
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
            const userId = req.headers["userId"];
            (0, assert_1.default)(userId, "User does not exists");
            const { username, place, skills, description, githubLink, email } = req.body;
            console.log(username);
            const emailCheck = yield joinTeamModel_1.default.exists({ email: email });
            if (emailCheck) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            var team = joinTeamModel_1.default.create({ username, place, skills, description, githubLink, email, userId: userId });
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
function requestToJoin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.headers["userId"];
            const { teamId } = req.body;
            const team = yield teamModel_1.default.exists({ _id: teamId });
            (0, assert_1.default)(team, "Team does not exist");
            const requestAlreadySent = yield teamModel_1.default.exists({ _id: teamId, requestsToJoin: userId });
            (0, assert_1.default)(!requestAlreadySent, " Request already sent ");
            yield teamModel_1.default.updateOne({ _id: teamId }, { $push: { requestsToJoin: userId } });
            return res.status(200).json({ message: 'Request sent' });
        }
        catch (error) {
            console.log(error);
            if (error instanceof assert_1.default.AssertionError) {
                return res.status(401).json({
                    msg: error.message,
                    code: 401
                });
            }
            return res.status(500).json({
                msg: "Error",
                code: 500
            });
        }
    });
}
exports.requestToJoin = requestToJoin;
const requestToJoinSchema = typebox_1.Type.Object({
    teamId: typebox_1.Type.String(),
    userId: typebox_1.Type.String()
});
function invite(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.headers["userId"];
            (0, assert_1.default)(userId, "User not logged in");
            const usersTeamId = yield teamModel_1.default.findById({ teamMembers: userId });
            (0, assert_1.default)(usersTeamId, " Team does not exist for this user");
            const { joinTeamId } = req.body;
            const team = yield joinTeamModel_1.default.exists({ _id: joinTeamId });
            (0, assert_1.default)(team, "Team does not exist");
            // // Check whether the user which is invited is already in a team or not
            // const teamMembers = Array.isArray(usersTeamId?.teamMembers) ? usersTeamId?.teamMembers.map(member => member.toString()) : [];
            // for(let i = 0; i < teamMembers.length; i++) {
            //     const user = await teamsModel.exists({ _id: teamMembers[i] });
            //     assert(!user, "User already in a team")
            // }
            yield joinTeamModel_1.default.updateOne({ _id: joinTeamId }, { $push: { inviteRequests: userId } });
            return res.status(200).json({ message: 'Invite sent' });
        }
        catch (error) {
            if (error instanceof assert_1.default.AssertionError) {
                return res.status(401).json({
                    msg: error.message,
                    code: 401
                });
            }
            return res.status(500).json({
                msg: "Error",
                code: 500
            });
        }
    });
}
exports.invite = invite;
const inviteSchema = typebox_1.Type.Object({
    joinTeamId: typebox_1.Type.String(),
    userId: typebox_1.Type.String()
});
function getTeams(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teams = yield teamModel_1.default.find();
            return res.status(200).json({ teams: teams });
        }
        catch (error) {
            return res.status(500).json({
                msg: "Error",
                code: 500
            });
        }
    });
}
exports.getTeams = getTeams;
function getJoinTeams(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teams = yield joinTeamModel_1.default.find();
            return res.status(200).json({ teams: teams });
        }
        catch (error) {
            return res.status(500).json({
                msg: "Error",
                code: 500
            });
        }
    });
}
exports.getJoinTeams = getJoinTeams;
