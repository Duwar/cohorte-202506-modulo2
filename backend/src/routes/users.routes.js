import express from 'express';
import { getAllUsers, postUser, putUserById, deleteUserById } from '../controllers/users.controller.js';
import { auth } from '../middleware/auth.js';

//2. Configurar Rutas
export const userRouter = express.Router();

userRouter.get('/mostrar' , getAllUsers);

userRouter.post('/crear', postUser);

userRouter.put('/actualizar/:id', putUserById);

userRouter.delete('/eliminar/:id', deleteUserById);