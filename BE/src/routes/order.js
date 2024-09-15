import { Router } from "express";
import { createOrder } from "../controller/order.js";



const orderRouter = Router();

orderRouter.post("/create", createOrder);

export { orderRouter }