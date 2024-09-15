import { orderModel } from "../schema/order.js";

export const createOrder = async (req, res) => {
    const { orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, paymentMethod } = req.body;

    try {
        const response = await orderModel.create({ orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, paymentMethod });
        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}