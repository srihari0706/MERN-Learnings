import express from 'express';
import { loginUser } from '../controllers/authController.js';

const router = express.Router(); //this will create a small interal router that routs to a aprticular function

// POST /api/login
router.post('/login', loginUser);

export default router;
