// pages/api/sendEmail.js

import nodemailer from 'nodemailer'
import ejs from 'ejs'
import fs from 'fs/promises'
import path from 'path' 
// import getConfig from 'next/config'

export default async function applyEmail(req: typeof applyEmailSchema, res: any) {
    const {
        userEmail,
        teamName,
        applierEmail,
        applierName,
        applierGitHub,
        applierSkills,
    } = req

    const hackathonMail = process.env.HACKATHON_EMAIL_SENDER_ID;
    try {
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                user: hackathonMail,
                pass: process.env.HACKATHON_EMAIL_SENDER_PASSWORD,
            },
        })

        // Get the PROJECT_ROOT from serverRuntimeConfig
        // const { PROJECT_ROOT } = getConfig().serverRuntimeConfig

        // Define the email data
        const mailOptions = {
            from: { name: 'HackBud Team', address: hackathonMail },
            to: userEmail,
            subject: 'Hackathon Team Application',
            // Use path.join to specify the template file path
            html: await renderEmailTemplate(
                teamName,
                applierEmail,
                applierName,
                applierGitHub,
                applierSkills
            ),
        }

        // Send the email
        transporter.sendMail({
            ...mailOptions,
            from: `TeamHac <${hackathonMail}>`,
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ error: 'Failed to send email' })
    }
}

const applyEmailSchema = {
    userEmail: 'string',
    teamName: 'string',
    applierEmail: 'string',
    applierName: 'string',
    applierGitHub: 'string',
    applierSkills: 'string',

}

async function renderEmailTemplate(
    teamName: string,
    applierEmail: string,
    applierName: string,
    applierGitHub: string,
    applierSkills: string
) {
    try {
        const templateFilePath = path.join(process.cwd(), 'apply-template.html') // Construct the absolute file path
        const templateFile = await fs.readFile(templateFilePath, 'utf-8')
        const renderedTemplate = ejs.render(templateFile, {
            // Load and render your email template using EJS
            teamName,
            applierEmail,
            applierName,
            applierGitHub,
            applierSkills,
        })

        return renderedTemplate
    } catch (error) {
        console.error('Error rendering email template:', error)
        throw error
    }
}