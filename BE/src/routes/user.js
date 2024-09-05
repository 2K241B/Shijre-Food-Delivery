import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/create", createUser).get("/:id", getUser).get("/", getUsers).put("/:id", updateUser).delete("/:id", deleteUser);

export {userRouter}