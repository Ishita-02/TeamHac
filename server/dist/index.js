"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const index_1 = __importDefault(require("./middlewares/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["https://team-hac.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});
app.use('/', auth_1.default);
app.use('/auth', index_1.default, userRoutes_1.default);
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
const MONGO_URL = process.env.MONGO_URL;
// Connect to MongoDB
mongoose_1.default.connect(MONGO_URL, { dbName: "TeamHac" });
