import express from 'express';
import { createUser , checkUser } from '../controllers/LoginControllers.js';

const authRoutes = express.Router(); //this will create a small interal router that routs to a aprticular function

// login rotes
authRoutes.post('/create-user', createUser);
authRoutes.post('/login', checkUser);

export default authRoutes;
