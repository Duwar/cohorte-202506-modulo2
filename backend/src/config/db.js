//1. Importamos las dependencias necesarias
import mongoose from "mongoose";

//2. Crearse la funcion de conexión
export const conexionMongo = async () => {
    try {
        await mongoose.connect(process.env.BD_URL,{dbName:"e-commerce"});
        console.log("Conexion exitosa con la base de datos!");
    } catch (error) {
        console.error("Ocurrio este error:",error);
    }
}
