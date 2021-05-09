import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({path: './config/.env'});

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server gestartet auf Port ${PORT}`));
