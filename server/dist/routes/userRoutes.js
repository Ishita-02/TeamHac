"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamControllers_1 = require("../controllers/teamControllers");
const router = express_1.default.Router();
router.post('/createTeam', teamControllers_1.createTeam);
router.post('/joinTeam', teamControllers_1.joinTeamCreate);
exports.default = router;
