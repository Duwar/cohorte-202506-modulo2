//1. import dependencias y modulos necesarios
import { userModel } from "../models/users.model.js";
import bcryptjs from "bcryptjs";

//Definir las aciones que van a realizar - CRUD

//1. Metodo para Crear un producto -> POST
export const postUser = async (req, res) => {
    try {

        // deestructurar cuando se hace - procesar la informaicón del usuario antes de guardarla
        const {name, username, email, age, password, role} = req.body;
        // .hash -> encripta la contraseña
        const codedPassword = await bcryptjs.hash(password, 10);
        await userModel.create({
            name, username, email, age, password:codedPassword, role
        });
        return res.status(201).json({
            "mensaje": "Usuario creado correctamente!"
        });

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al crear el usuario!",
            "error": error.message || error
        })
    }
};

export const getAllUsers = (req, res) => {
    try {

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al mostrar los usuarios!",
            "error": error.message || error
        })
    }
};

export const putUserById = (req, res) => {
    try {

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al actualizar el usuario!",
            "error": error.message || error
        })
    }
}

export const deleteUserById = (req, res) => {
    try {

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al eliminar el usuario!",
            "error": error.message || error
        })
    }
}