import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log("Backend listening on port", PORT)
})