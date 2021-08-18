import { Request, Response } from 'express';
const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req: Request, res: Response) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});