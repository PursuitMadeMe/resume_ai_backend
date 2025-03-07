import { generateResume, generateCoverLetter } from "../services/aiService.js";
import express from "express";

const router = express.Router();

// ✅ Ensure this matches the Postman request
router.post('/generate-resume', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Missing prompt in request body" });
        }

        const response = await generateResume(prompt);
        res.json({ resume: response });
    } catch (error) {
        console.error("Error in /generate-resume:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ✅ Route for generating cover letters
router.post("/generate-cover-letter", async (req, res) => {
    try {
        const { job_title, company, applicant_name } = req.body;

        if (!job_title || !company || !applicant_name) {
            return res.status(400).json({ error: "Missing required fields: job_title, company, applicant_name" });
        }

        const coverLetter = await generateCoverLetter(job_title, company, applicant_name);
        res.json({ cover_letter: coverLetter });
    } catch (error) {
        console.error("Error in /generate-cover-letter:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


export default router;
// ✅ Ensure this is correctly exported
