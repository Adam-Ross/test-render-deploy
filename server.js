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
//



app.listen(3000, () => console.log('Server started on port 3000'));