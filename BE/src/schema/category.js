import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
})

export const userModel = model("user", CategorySchema);