
//1. import dependencias y modulos necesarios
import { productModel } from "../models/products.model.js";

//Definir las aciones que van a realizar - CRUD

//1. Metodo para Crear un producto -> POST
export const postProduct = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                "mensaje": "Debe subir un archivo de imagen"
            });
        }

        //organizar primero el producto que se va a crear
        const newProduct = {
            ...req.body,
            imagen: `/uploads/${req.file.filename}`
        }

        await productModel.create(newProduct);

        return res.status(201).json({
            "mensaje": "Producto creado correctamente!"
        });

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al crear el producto!",
            "error": error.message || error
        })
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        return res.status(200).json({
            "mensaje": "Se encontraron todos los productos!",
            "data": allProducts
        });
    } catch (error) {
        return res.status(500).json({
            "mensaje": "Ocurrio un error al mostrar los productos!",
            "error": error.message || error
        })
    }
};

export const putProductById = async (req, res) => {
    try {
        const idForUpdate = req.params.id;
        const dataForUpdate = req.body;
        await productModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return res.status(200).json({
            "mensaje": "Producto actualizado correctamente!"
        });

    } catch (error) {
        return res.status(500).json({
            "mensaje": "Ocurrio un error al actualizar el producto!",
            "error": error.message || error
        })
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const idForDelet = req.params.id;
        await productModel.findByIdAndDelete(idForDelet);
        return res.status(200).json({
            "mensaje": "Producto eliminado correctamente!"
        });

    } catch (error) {
        res.status(400).json({
            "mensaje": "Ocurrio un error al eliminar el producto!",
            "error": error.message || error
        })
    }
}