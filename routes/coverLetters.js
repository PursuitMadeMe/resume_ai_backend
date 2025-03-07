import express from 'express';
const router = express.Router();
import pool from '../db.js';

// Get all cover letters
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM cover_letters');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get cover letter by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM cover_letters WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Cover letter not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Add a new cover letter
router.post('/', async (req, res) => {
    const { user_id, job_title, company_name, content } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO cover_letters (user_id, job_title, company_name, content) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, job_title, company_name, content]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding cover letter');
    }
});

// Delete a cover letter
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM cover_letters WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Cover letter not found');
        }
        res.json({ message: 'Cover letter deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting cover letter');
    }
});

export default router;
