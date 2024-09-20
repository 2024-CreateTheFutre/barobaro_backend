import Mongoose from "mongoose";

const { Schema } = Mongoose;
const boardSchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    title: {
        type : String,
        required: true
    },
    content : {
        type : String,
        required: true
    },
    image : {
        type : Buffer,
        required : false
    },
    major : {
        type : String,
        required: true
    },
    board_id : {
        type : Number,
        required : true
    }
}, {timestamps: true});

const board = Mongoose.model('board', boardSchema);

export {boardSchema, board};