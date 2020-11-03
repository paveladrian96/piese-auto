const mongoose = require("mongoose")

const tipPieseAutoSchema = new mongoose.Schema({
    nume: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
   
}, {timestamps: true})

module.exports = mongoose.model("TipPieseAuto", tipPieseAutoSchema)