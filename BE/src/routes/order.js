import { Router } from "express";
import { createOrder, getOrders, updateOrder } from "../controller/order.js";




const orderRouter = Router();

orderRouter.post("/create", createOrder)
.get("/", getOrders)
.put("/:id", updateOrder);

export { orderRouter }