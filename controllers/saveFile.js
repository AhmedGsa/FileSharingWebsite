const bcrypt = require("bcryptjs");
const File = require("../models/File");

const saveFile = async (req,res) => {
    const {password} = req.body
    if(password && password != "") {
        const hashedPassword = await bcrypt.hash(password, 10);
        const file = {
            path: req.file.path,
            filename: req.file.originalname,
            password: hashedPassword
        }
        const createdFile = await File.create(file);
        res.status(201).json({fileID: createdFile._id});
        //res.render("index", {fileID: createdFile._id})
    } else {
        const file = {
            path: req.file.path,
            filename: req.file.originalname
        }
        const createdFile = await File.create(file);
        res.status(201).json({fileID: createdFile._id});
        //res.render("index", {fileID: createdFile._id})
    }
}

module.exports = saveFile