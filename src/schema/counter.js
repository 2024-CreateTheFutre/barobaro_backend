import mongoose from "mongoose";

const { Schema } = mongoose;
const counterSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        default: 0
    }
}, { versionKey: false });