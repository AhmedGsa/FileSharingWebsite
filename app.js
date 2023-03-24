require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const viewsRouter = require("./routes/views");
const fileRouter = require("./routes/file");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));
app.use("/files", fileRouter);
app.use("/",viewsRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const start = async () => {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
}

start();