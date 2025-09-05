import express from 'express';
import { getAllUsers, postUser, putUserById, deleteUserById } from '../controllers/users.controller.js';

export const userRouter = express.Router();

userRouter.post('/mostrar',postUser);

userRouter.get('/crear', getAllUsers);

userRouter.put('/actualizar/:id', putUserById);

userRouter.delete('/eliminar/:id', deleteUserById);