import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { Login } from "../controller/auth.js";


const userRouter = Router();

userRouter.post("/create", createUser).get("/:id", getUser).get("/", getUsers).put("/:id", updateUser).delete("/:id", deleteUser).post("/login", Login);

export {userRouter}