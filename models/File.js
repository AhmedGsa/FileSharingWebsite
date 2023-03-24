const mongoose = require("mongoose");
const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: [true, "Please provide the filename!"]
    },
    path: {
        type: String,
        required: [true, "Please provide the path to the file !"]
    },
    password: {
        type: String
    },
    nbrOfDownloads: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("File", fileSchema);