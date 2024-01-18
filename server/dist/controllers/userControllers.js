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
exports.joinTeam = exports.createTeam = exports.login = exports.signup = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const assert_1 = __importDefault(require("assert"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const teamModel_1 = __importDefault(require("../models/teamModel"));
const typebox_1 = require("@sinclair/typebox");
require('dotenv').config();
const secret = process.env.SECRET;
function signup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var { email, password } = req.body;
            var hashPassword = bcrypt_1.default.hashSync(password, 10);
            const emailCheck = yield userModel_1.default.findOne({ email });
            if (emailCheck)
                return res.json({ msg: "Email already used", status: false });
            var user = yield userModel_1.default.create({ email, hashPassword });
            const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, role: 'user' }, secret !== null && secret !== void 0 ? secret : '', { expiresIn: '1h' });
            return res.json({ message: 'User created successfully', token });
        }
        catch (error) {
            next();
        }
    });
}
exports.signup = signup;
const signupSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String()
});
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var { email, password } = req.body;
            var user = yield userModel_1.default.findOne({ email });
            (0, assert_1.default)(user, " User not found ");
            var valid = bcrypt_1.default.compareSync(password, user.hashPassword);
            if (valid) {
                const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, role: 'user' }, secret !== null && secret !== void 0 ? secret : '', { expiresIn: '1h' });
                res.json({ message: 'Logged in successfully', token });
            }
            else {
                res.status(403).json({ message: 'Invalid username or password' });
            }
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
exports.login = login;
function createTeam({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var team = teamModel_1.default.create({ hackathonName, teamName, modeOfHackathon, place, skills, description, githubLink });
            (0, assert_1.default)(team, " Can't add team ");
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
exports.createTeam = createTeam;
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
