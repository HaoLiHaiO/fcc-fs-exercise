import { Request, Response } from 'express';
import { Exercise } from "../models/exercise.model";
const router = require('express').Router();

router.route('/').get((req: Request, res: Response) => {
    Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err: Error) => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req: Request, res: Response) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
})

export { router as exerciseRouter }