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
        console.error("Ocurrió un error en el controlador:", error);
        return res.status(400).json({
            "mensaje": "Ocurrio un error al crear el usuario!",
            "error": error.message || error
        })
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        return res.status(200).json({
            "mensaje": "Se encontraron todos los usuarios!",
            "data": allUsers
        });
    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al mostrar los usuarios!",
            "error": error.message || error
        })
    }
};

export const putUserById = async (req, res) => {
    try {
        const idForUpdate = req.params.id;
        const dataForUpdate = req.body;
        await userModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return res.status(200).json({
            "mensaje": "Usuario actualizado correctamente!"
        });
    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al actualizar el usuario!",
            "error": error.message || error
        })
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const idForDelet = req.params.id;
        await userModel.findByIdAndDelete(idForDelet);
        return res.status(200).json({
            "mensaje": "Usuario eliminado correctamente!"
        });
    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrio un error al eliminar el usuario!",
            "error": error.message || error
        })
    }
}