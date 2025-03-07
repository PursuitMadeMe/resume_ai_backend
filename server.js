import 'dotenv/config';
import express from 'express';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 9000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Use built-in JSON parser

// ✅ Connect ROUTES (No `/api/` prefix to match original structure)
import usersRoute from './routes/users.js';
app.use('/users', usersRoute);

import resumesRoute from './routes/resumes.js';
app.use('/resumes', resumesRoute);

import coverLettersRoute from './routes/coverLetters.js';
app.use('/cover_letters', coverLettersRoute);

import aiRoute from './routes/ai.js'; // ✅ Ensure this matches the correct route file
app.use('/ai', aiRoute);

// ✅ Test Route
app.get('/', (req, res) => {
    res.send('AI Resume & Cover Letter Generator Backend is running...');
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
