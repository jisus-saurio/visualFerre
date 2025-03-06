//Importar todo lo de la libreria express

import express from 'express';

//Creo una constane que es igual a la libreria
const app = express();

app.use("/api/productos")
app.use("/api/providers")

//Exporto la constante para poder usar express en otros Archivos
export default app;



