import { Router } from "express";
import { createUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/create", createUser);

export {userRouter}