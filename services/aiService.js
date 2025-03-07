import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateResume(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" }); // ✅ Use correct model name

        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

        const response = result.response.text();  // Get response text
        return response;
    } catch (error) {
        console.error("Error generating resume:", error);
        return "Error: Unable to generate resume.";
    }
}



export async function generateCoverLetter(jobTitle, company, applicantName) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

        // ✅ Better Prompt for Cover Letter Generation
        const coverLetterPrompt = `
        You are an expert at writing professional cover letters. Generate a cover letter for the following job application:

        - **Applicant Name**: ${applicantName}
        - **Job Title**: ${jobTitle}
        - **Company**: ${company}

        The cover letter should include:
        1. A strong introduction mentioning the job role and company.
        2. A paragraph highlighting key skills and experience relevant to the role.
        3. A closing statement expressing enthusiasm and request for an interview.

        Format it as a professional, well-structured cover letter.
        `;

        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: coverLetterPrompt }] }] });

        const response = result.response.text();
        return response;
    } catch (error) {
        console.error("Error generating cover letter:", error);
        return "Error: Unable to generate cover letter.";
    }
}
