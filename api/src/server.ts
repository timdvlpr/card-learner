import express from 'express';
import * as dotenv from 'dotenv';

const cors = require('cors');
const errorHandler = require('./middleware/error');

// Server setup
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}));

// Dotenv environment variables config
dotenv.config({path: './src/config/.env'});

// Mysql database connection
const connection = require('./config/dbconfig');
connection.connect(err => {
    if (err === null) return console.log('Verbunden mit Datenbank');
    console.log(`Fehler bei Datenbankverbindung: ${err}`);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/group', require('./routes/group'));
app.use('/api/stack', require('./routes/stack'));
app.use('/api/card', require('./routes/card'));

app.use(errorHandler);

// Starting server
app.listen(PORT, () => console.log(`Server gestartet auf Port ${PORT}`));
