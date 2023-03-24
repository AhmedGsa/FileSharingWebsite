const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

module.exports = async function connectDB (url) {
    await mongoose.connect(url);
}