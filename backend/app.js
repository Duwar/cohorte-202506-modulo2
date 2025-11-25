// El archivo de ejecución de nuestra aplicación
// configurar nuestro servidor y gestionar la lógica de negocio

    console.log('Hola desarrollador');

//1. Importar las dependencias y modulos necesarias
import express from "express"
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { userRouter } from './src/routes/users.routes.js';
import { productRouter } from './src/routes/products.routes.js';
import { loginRoute } from "./src/routes/login.routes.js";
import path from "path"; // modulo de node
import cors from "cors";
import { fileURLToPath } from "url"; // modulo de node


//2. configurar las dependencias y modulos que necesitamos
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo (); // Esto hace la conexión con db
const _filename = fileURLToPath(import.meta.url); // _filename = backend/app.js
const _dirname = path.dirname(_filename); // _dirname = backend

//3. funcionalidades que necesite agregar
// app.get("/",(req,res)=>{
// res.send("El servidor funciona!")
// });

app.use(express.static(path.join(_dirname, "dist", "frontend", "browser")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "frontend", "browser", "index.html"));
});

app.use(cors()); // habilitar CORS
app.use(express.json()); //es para usar formato json
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/uploads', express.static(path.join(_dirname, "src/uploads")));
app.use("/login", loginRoute);


//4. levantar el servicio
app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${port}`)
});