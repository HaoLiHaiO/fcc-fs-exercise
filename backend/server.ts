import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { exerciseRouter } from './routes/exercises';
import { usersRouter } from './routes/users';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Successfully connected to MongoDB database!');
})

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
