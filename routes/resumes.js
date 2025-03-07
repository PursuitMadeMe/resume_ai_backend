import express from 'express';
const router = express.Router();
import pool from '../db.js';

// Get all resumes
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM resumes');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// ✅ Fetch all resumes for a given user
router.get("/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;

        // Fetch resumes for the given user_id
        const userResumes = await pool.query("SELECT * FROM resumes WHERE user_id = $1", [user_id]);

        if (userResumes.rows.length === 0) {
            return res.status(404).json({ error: "No resumes found for this user." });
        }

        res.json({
            user_id: user_id,
            resumes: userResumes.rows,
        });
    } catch (error) {
        console.error("Error fetching resumes:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Add resume
// ✅ Ensure 'resume' is extracted from request body
router.post("/", async (req, res) => {
    try {
        const { user_id, resume } = req.body;

        // ✅ Check if resume is missing in the request
        if (!user_id || !resume) {
            return res.status(400).json({ error: "Missing user_id or resume content" });
        }

        // ✅ Insert into database
        const newResume = await pool.query(
            "INSERT INTO resumes (user_id, content) VALUES ($1, $2) RETURNING *",
            [user_id, resume]
        );

        res.json(newResume.rows[0]); // ✅ Return the inserted resume
    } catch (error) {
        console.error("Error saving resume:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;