import { Router } from "express";
import { Login } from "../controller/auth.js";


const authRouter = Router();

authRouter.post("/login", Login);

export {authRouter}