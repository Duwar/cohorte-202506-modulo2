import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/products.controller.js';
import { upload } from '../config/multer.js'; 
import { auth } from '../middleware/auth.js';

export const productRouter = express.Router();

productRouter.post('/crear', auth("admin"), upload.single('imagen'), postProduct);

productRouter.get('/mostrar', getAllProducts);

productRouter.put('/actualizar/:id',auth("admin"), putProductById);

productRouter.delete('/eliminar/:id', auth("admin"), deleteProductById);