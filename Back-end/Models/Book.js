import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publishYear:{
        type: String,
        required: true
    },


},
{
    timestamps:true,
})

export const books = mongoose.model('Books',bookschema)