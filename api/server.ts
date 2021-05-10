import * as express from 'express';
import * as dotenv from 'dotenv';

const errorHandler = require('./middleware/error');

// Server setup
const app = express();
const PORT = process.env.PORT || 5000;

// Dotenv environment variables config
dotenv.config({path: './config/.env'});

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

app.use(errorHandler);

// Starting server
app.listen(PORT, () => console.log(`Server gestartet auf Port ${PORT}`));
