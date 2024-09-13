import { Router } from "express";
import { createCategory, getCategories } from "../controller/category.js";


const categoryRouter = Router();

categoryRouter.post("/create", createCategory).get("/", getCategories);

export {categoryRouter}