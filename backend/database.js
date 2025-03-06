import mongoose from "mongoose";



const URI = "mongodb://localhost:27017/ferreteriaEPA"

mongoose.connect (URI) ;

const connection = mongoose.connection;

connection.once("open", () => console.log("DB is onnected"))



connection.on("disconected", () => console.log("DB on") )

