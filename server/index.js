import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://erayadiyaman:erayadiyaman123321@cluster0.p7pyi.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
        .then(()=> console.log(`Server connection on port:${PORT} succesfull!`))
        .catch((error)=> console.log(error.message))