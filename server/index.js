import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"

const app = express();

app.use("/posts",postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://erayadiyaman:erayadiyaman123321@cluster0.p7pyi.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
        .then(()=> app.listen(PORT,()=> console.log(`Server connection on port:${PORT} succesfull!`))) // im stupid,forgot to add listen
        .catch((error)=> console.log(error.message))