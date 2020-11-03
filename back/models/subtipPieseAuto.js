const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const subtipPieseAutoSchema = new mongoose.Schema({
    nume: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    tipPieseAuto: {
        type: ObjectId,
        ref: 'TipPieseAuto',
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
   
}, {timestamps: true})

module.exports = mongoose.model("SubtipPieseAuto", subtipPieseAutoSchema)