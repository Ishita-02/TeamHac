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
exports.joinTeam = exports.createTeam = exports.login = exports.signUp = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const assert = require("assert");
const bcrypt_1 = __importDefault(require("bcrypt"));
const teamModel_1 = __importDefault(require("../models/teamModel"));
function signUp({ email, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var hashPassword = bcrypt_1.default.hashSync(password, 10);
            var user = yield userModel_1.default.create({ email, hashPassword });
            assert(user, " Can't add user ");
            return {
                msg: "User added",
                code: 200,
            };
        }
        catch (error) {
            if (error instanceof assert.AssertionError) {
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
exports.signUp = signUp;
function login({ email, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var user = yield userModel_1.default.findOne({ email });
            assert(user, " User not found ");
            var valid = bcrypt_1.default.compareSync(password, user.hashPassword);
            if (valid) {
                return {
                    msg: "Login successful",
                    code: 200,
                    data: {
                        email: user.email,
                    }
                };
            }
            else {
                return {
                    msg: "Login failed",
                    code: 401
                };
            }
        }
        catch (error) {
            if (error instanceof assert.AssertionError) {
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
            assert(team, " Can't add team ");
            return {
                msg: "Team added",
                code: 200,
            };
        }
        catch (error) {
            if (error instanceof assert.AssertionError) {
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
            if (error instanceof assert.AssertionError) {
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
