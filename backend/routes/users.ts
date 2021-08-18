import { Request, Response } from 'express';
import { User } from '../models/user.model'
const router = require('express').Router();

router.route('/').get((req: Request, res: Response) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req: Request, res: Response) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

export { router as usersRouter }