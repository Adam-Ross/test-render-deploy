const express = require('express');
const app = express();
const {Pool} = require('pg');
const dotenv = require('dotenv')


dotenv.config()

// const dbConfig = {
//     user: 'garrettross',
//     database: 'pet_database',
//     password: '',
//     host: 'localhost',
//     port: 5432,
// };

// connectionString
const dbConfig = {
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(dbConfig);

app.use(express.json())

// get all
app.get('/pets', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pets');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});


// get one route
// app.get('/pets/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const result = await pool.query('SELECT * FROM pet WHERE pet_id = $1', [id]);
//         res.json(result.rows[0]);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

// app.post('/pets', async (req, res) => {
//     try {
//         const { name, age, kind } = req.body;
        
//         await pool.query('INSERT INTO pet (name, age, kind) VALUES ($1, $2, $3)', [name, age, kind]);
        
//         res.json({ success: true, message: 'Pet added' }).status(201)
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

// app.put('/pets/:id', async (req, res) => {
//     try {

//         const { name, age, kind } = req.body;
//         const { id } = req.params
        
//         await pool.query('UPDATE pet SET name = $1, age = $2, kind = $3 WHERE pet_id = $4', [name, age, kind, id]);
        
//         res.json({  message: `Updated pet_id: ${id}` }).status(204);
//     } catch (err) {
//         res.status(500).json({ err });
//     }
// });



app.listen(3000, () => console.log('Server started on port 3000'));