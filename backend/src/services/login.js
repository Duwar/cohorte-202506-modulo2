import { userModel } from "../models/users.model.js";   //Validar usuario
import { generateToken } from "../config/jwt.js";         //Generar el token de seguridad
import bcryptjs from "bcryptjs";                        //Poder validar la contraseña

export const login = async(req, res) =>{
 try {
        //Validar si el correo electronico existe
    const {emailLogin, passwordLogin} = req.body;

    //1. primero buscar en la base de datos

    const userFound = await userModel.findOne({
        email: emailLogin
    });
    
    console.log("Este es el usuario encontrado: ", userFound);

    if(!userFound){
        return res.status(404).json({
            "mensaje":"Usuario no encontrado, por favor registrate"
        });
    }

    //2. contraseña correcta

    const validPassword = await bcryptjs.compare(passwordLogin, userFound.password);
    console.log("validPassword ", validPassword);
    if(!validPassword){
        return res.status(401).json({
            "mensaje":"Contraseña incorrecta"
        });

    }

    //Generación de token -> Verficar permisos

    const payload = {
        id: userFound._id,
        user: userFound.username
    }

    if(userFound.role === "admin"){
        payload.admin = true;
    }else {
        payload.admin = false;
    }

    const token = await generateToken(payload);
    console.log("payload ", payload);
    console.log("token ", token);

    return res.status(200).json({
            "mensaje":"Inicio de sesión exitoso!!",
            "token ":token
        });

 } catch (error){
        return res.status(400).json({
            "mensaje": "Ocurrio un error al inciar sesión",
            "error": error.message || error
        })
    }

}