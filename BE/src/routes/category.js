import { Router } from "express";
import { createCategory } from "../controller/category.js";


const categoryRouter = Router();

categoryRouter.post("/create", createCategory);

export {categoryRouter}