import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/products.controller.js';

export const productRouter = express.Router();

productRouter.post('/crear',postProduct);

productRouter.get('/mostrar', getAllProducts);

productRouter.put('/actualizar/:id', putProductById);

productRouter.delete('/eliminar/:id', deleteProductById);