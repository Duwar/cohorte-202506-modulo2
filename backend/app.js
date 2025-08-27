// El archivo de ejecución de nuestra aplicación
// configurar nuestro servidor y gestionar la lógica de negocio

    console.log('Hola desarrollador');

//1. Importar las dependencias necesarias
import express from "express"
import dotenv from "dotenv";

//2. configurar las dependencias que necesitamos
const app = express();
dotenv.config();


const port = 3000;

//3. funcionalidades que necesite agregar
app.get("/",(req,res)=>{
res.send("El servidor funciona!")
});


//4. levantar el servicio
app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${port}`)
});