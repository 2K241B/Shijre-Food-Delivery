import { Router } from "express";
import { createOrder, getOrders } from "../controller/order.js";



const orderRouter = Router();

orderRouter.post("/create", createOrder)
.get("/", getOrders);

export { orderRouter }