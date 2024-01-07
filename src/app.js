"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Create Express app
const app = (0, express_1.default)();
// Body parser middleware
app.use(express_1.default.json());
const mongoURI = process.env.MONGO_URL;
const mongoOptions = {
    useNewUrlParser: true, // MongoDB Node.js driver option
    //useUnifiedTopology: true, // MongoDB Node.js driver option
};
mongoose_1.default.connect(mongoURI)
    .then(() => {
    console.log("DB Connected");
}).catch(() => {
    console.log("Can't connect to DB");
    process.exit(0);
});
