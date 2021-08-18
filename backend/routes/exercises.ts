import { Request, Response } from 'express';
import { Exercise } from "../models/exercise.model";
const router = require('express').Router();

router.route('/').get((req: Request, res: Response) => {
    Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err: Error) => res.status(400).json('Error: '+ err));
});

export { router as exerciseRouter }