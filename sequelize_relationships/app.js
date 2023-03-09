import express from 'express';
import dotenv from 'dotenv';

import db from './models/index.js';
const sequelize = db.sequelize;

dotenv.config();
const app = express();

sequelize.sync();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});