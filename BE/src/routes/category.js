import { Router } from "express";
import { createCategory, getCategories, getCategoryByID, updateCategory } from "../controller/category.js";


const categoryRouter = Router();

categoryRouter.post("/create", createCategory)
.get("/", getCategories)
.get("/:id", getCategoryByID)
.put("/:id", updateCategory);

export {categoryRouter}