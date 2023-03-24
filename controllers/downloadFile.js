const bcrypt = require("bcryptjs");
const File = require("../models/File");
const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");

const downloadFile = async (req,res) => {
    const {fileId} = req.params;
    const file = await File.findById(fileId);
    
    if(!file) {
        throw new NotFoundError("File doesn't exist!");
    }
    if(!file.password) {
        res.download(file.path, file.filename);
        return
    } else {
        res.render("password", {fileID: fileId});
    }
}

const downloadFileWithPassword = async (req,res) => {
    const {fileId} = req.params;
    const {password} = req.body;
    if(!fileId) {
        throw new NotFoundError("File doesn't exist!");
    }
    if(!password) {
        throw new BadRequestError("Please provide the password!");
    }
    const file = await File.findById(fileId);
    if(!file.password) {
        throw new BadRequestError("File doesn't have a password! try downloading it directly!");
    }
    const isMatch = await bcrypt.compare(password, file.password);
    if(!isMatch) {
        throw new BadRequestError("Wrong Password!");
    } else {
        res.download(file.path, file.filename);
    }
}

module.exports = {downloadFile, downloadFileWithPassword};