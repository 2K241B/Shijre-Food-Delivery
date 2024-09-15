import { foodModel } from "../schema/food.js"

export const createFood = async (req, res) => {
    const { name, image, ingredients, price, discount } = req.body;

    try {
        const response = await foodModel.create({ name, image, ingredients, price, discount })
        res.status(200).json(response)

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}