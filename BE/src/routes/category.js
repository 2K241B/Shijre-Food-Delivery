import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoryByID, updateCategory } from "../controller/category.js";


const categoryRouter = Router();

categoryRouter.post("/create", createCategory)
.get("/", getCategories)
.get("/:id", getCategoryByID)
.put("/:id", updateCategory)
.delete("/:id", deleteCategory);

export {categoryRouter}