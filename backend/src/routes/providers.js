import express from "express";

const routes = express.Routes();

// Importar los controladores

import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "./controllers/products.js";

// Rutas
routes.get("/products", getAllProducts);
routes.post("/products", createProduct);
routes.put("/products/:id", updateProduct);
routes.delete("/products/:id", deleteProduct);

// Importar todo lo de la libreria express
import express from 'express';
import { Router } from 'express';

//Creo una constante que es igual a la libreria
const app = express.Router();

//Exporto la constante para poder usar express en otros Archivos

export default routes;


import express from "express";

// Importar los controladores
import * as productsController from "../controllers/products.js";