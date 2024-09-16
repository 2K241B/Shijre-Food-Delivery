import { Schema, model } from "mongoose";

const OTPSchema = new Schema({
    email: {
        type: String,
        required: [true, "Name is required"]
    },
    oneTimePass: {
        type: Number,
        required: [true, "One Time Password is required"],
        expires: 3600
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const otpModel = model("otp", OTPSchema);