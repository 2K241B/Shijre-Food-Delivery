import { Router } from "express";
import { createOrder, deleteOrder, getOrders, updateOrder } from "../controller/order.js";




const orderRouter = Router();

orderRouter.post("/create", createOrder)
.get("/", getOrders)
.put("/:id", updateOrder)
.delete("/:id", deleteOrder);

export { orderRouter }