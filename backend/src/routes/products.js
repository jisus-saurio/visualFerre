import express from "express";

const routes = express.Routes();

// Importar los controladores
import * as productsController from "../controllers/products.js";

// Rutas para Productos
routes.get("/products", productsController.getProducts);
routes.post("/products", productsController.createProduct);
routes.put("/products/:id", productsController.updateProduct);
routes.delete("/products/:id", productsController.deleteProduct);

// Rutas para Categorias

routes.get("/categories", productsController.getCategories);
routes.post("/categories", productsController.createCategory);

export default routes;

// Importar todo lo de la libreria express

import express from 'express';
import { Router } from 'express';
import { getProducts, createProduct, getCategories, createCategory } from '../controllers/products.js';
