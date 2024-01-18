"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers"); // Import the signup function
const router = express_1.default.Router();
router.post('/signup', userControllers_1.signup);
router.post('/login', userControllers_1.login);
exports.default = router;
