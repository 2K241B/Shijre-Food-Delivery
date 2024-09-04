import { Router } from "express";
import { createUser, getUser, getUsers } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/create", createUser).get("/:id", getUser).get("/", getUsers);

export {userRouter}