import { Router } from "express";
import { createOrder, getOrderByID, getOrders } from "../controller/order.js";



const orderRouter = Router();

orderRouter.post("/create", createOrder)
.get("/", getOrders)
.get("/:id", getOrderByID);

export { orderRouter }