"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("../middlewares"));
const teamControllers_1 = require("../controllers/teamControllers");
const router = express_1.default.Router();
router.post('/createTeam', middlewares_1.default, teamControllers_1.createTeam);
exports.default = router;
