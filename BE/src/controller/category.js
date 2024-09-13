import { categoryModel } from "../schema/category.js";

export const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const response = await categoryModel.create({ name })
        res.status(200).json(response)

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getCategories = async (req, res) => {

    try {
        const response = await categoryModel.find()
        res.send(response)

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getCategoryByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await categoryModel.findById(id)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const updatedValues = req.body

    try {
        const response = await categoryModel.findByIdAndUpdate(id, updatedValues, { new: true })
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}