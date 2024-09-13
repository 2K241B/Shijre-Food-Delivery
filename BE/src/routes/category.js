import { Router } from "express";
import { createCategory, getCategories, getCategoryByID } from "../controller/category.js";


const categoryRouter = Router();

categoryRouter.post("/create", createCategory)
.get("/", getCategories)
.get("/:id", getCategoryByID);

export {categoryRouter}