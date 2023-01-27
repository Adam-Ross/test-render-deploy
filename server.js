const express = require('express');
const app = express();
const {Pool} = require('pg');
const dotenv = require('dotenv')

const PORT = process.env.PORT || 3000

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

app.use(express.static('public'))

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



app.listen(PORT);