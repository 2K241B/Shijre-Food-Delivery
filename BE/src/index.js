import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import { Connect } from "./utils/db.js";
import { userRouter } from "./routes/user.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use("/user",userRouter)

app.listen(PORT, () => {
    Connect(process.env.MONGODB_URL)
    console.log("Backend listening on port", PORT)
})