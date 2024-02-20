"use strict";
// pages/api/sendEmail.js
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
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path")); // Import the 'path' module
// import getConfig from 'next/config'
function inviteEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userEmail, name, applierTeamEmail, applierTeamName, applierTeamDescription, } = req;
        const hackathonMail = process.env.HACKATHON_EMAIL_SENDER_ID;
        try {
            // Create a Nodemailer transporter
            const transporter = nodemailer_1.default.createTransport({
                service: 'Gmail',
                auth: {
                    user: hackathonMail,
                    pass: process.env.HACKATHON_EMAIL_SENDER_PASSWORD,
                },
            });
            // Get the PROJECT_ROOT from serverRuntimeConfig
            // const { PROJECT_ROOT } = getConfig().serverRuntimeConfig
            // Define the email data
            const mailOptions = {
                from: { name: 'HackBud Team', address: hackathonMail },
                to: userEmail,
                subject: 'Hackathon Team Invitation',
                // Use path.join to specify the template file path
                html: yield renderEmailTemplate(name, applierTeamEmail, applierTeamName, applierTeamDescription),
            };
            // Send the email
            transporter.sendMail(Object.assign(Object.assign({}, mailOptions), { from: `TeamHac <${hackathonMail}>` }));
            res.status(200).json({ message: 'Email sent successfully' });
        }
        catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    });
}
exports.default = inviteEmail;
const inviteEmailSchema = {
    userEmail: 'string',
    name: 'string',
    applierTeamEmail: 'string',
    applierTeamName: 'string',
    applierTeamDescription: 'string',
};
function renderEmailTemplate(name, applierTeamEmail, applierTeamName, applierTeamDescription) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const templateFilePath = path_1.default.join(process.cwd(), 'apply-template.html'); // Construct the absolute file path
            const templateFile = yield promises_1.default.readFile(templateFilePath, 'utf-8');
            const renderedTemplate = ejs_1.default.render(templateFile, {
                // Load and render your email template using EJS
                name,
                applierTeamEmail,
                applierTeamName,
                applierTeamDescription,
            });
            return renderedTemplate;
        }
        catch (error) {
            console.error('Error rendering email template:', error);
            throw error;
        }
    });
}
