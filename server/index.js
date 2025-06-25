// ✅ index.js (Node.js Backend)
// node index.js
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Water',
    password: 'mYseql',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Welcome to WaterPark!!!');
});

app.get('/api/contact', (req, res) => {
    res.send('✅ Contact API GET route working');
});

app.get('/api/offers', (req, res) => {
    res.json([
        { id: 1, title: 'Gold Pass', price: 2999 },
        { id: 2, title: 'Silver Pass', price: 1999 },
        { id: 3, title: 'Bronze Pass', price: 999 }
    ]);
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await pool.query(
            'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        );
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Error saving contact:', err);
        res.status(500).json({ error: 'Failed to save contact message' });
    }
});

app.post('/api/bookings', async (req, res) => {
    const { offer_title, name, email, tickets, section_type } = req.body;

    try {
        await pool.query(
            'INSERT INTO bookings (offer_title, name, email, tickets, section_type) VALUES ($1, $2, $3, $4, $5)',
            [offer_title, name, email, tickets, section_type]
        );
        res.status(200).json({ success: true, message: 'Booking saved!' });
    } catch (err) {
        console.error('Error saving booking:', err);
        res.status(500).json({ error: 'Failed to save booking' });
    }
});

app.post('/api/snowworld-booking', async (req, res) => {
    const { offer_title, name, email, tickets } = req.body;

    try {
        await pool.query(
            'INSERT INTO snowworld_bookings (offer_title, name, email, tickets) VALUES ($1, $2, $3, $4)',
            [offer_title, name, email, tickets]
        );
        res.status(200).json({ success: true, message: 'Booking confirmed!' });
    } catch (err) {
        console.error('Error saving SnowWorld booking:', err);
        res.status(500).json({ error: 'Failed to save booking' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

app.get('/api/rides', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM rides');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching rides:', err);
        res.status(500).json({ error: 'Failed to fetch rides' });
    }
});

app.post('/api/reviews', async (req, res) => {
    const { ride_id, name, comment } = req.body;
    try {
        await pool.query(
            'INSERT INTO ride_reviews (ride_id, name, comment) VALUES ($1, $2, $3)',
            [ride_id, name, comment]
        );
        res.status(201).json({ success: true });
    } catch (err) {
        console.error('Error saving review:', err);
        res.status(500).json({ error: 'Failed to save review' });
    }
});

app.get('/api/reviews/:ride_id', async (req, res) => {
    const { ride_id } = req.params;
    try {
        const result = await pool.query(
            'SELECT name, comment FROM ride_reviews WHERE ride_id = $1',
            [ride_id]
        );
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

app.get('/api/water-slides', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM water_slides');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching water slides:', err);
        res.status(500).json({ error: 'Failed to fetch water slides' });
    }
});
