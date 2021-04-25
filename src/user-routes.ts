import express from 'express';
import registerUser from './registration';

const router = express.Router();

router.post('/register', registerUser);

export default router;