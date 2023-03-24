const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const saveFile = require("../controllers/saveFile");
const {downloadFile, downloadFileWithPassword} = require("../controllers/downloadFile");

router.route("/upload").post(upload.single("file"),saveFile);
router.route("/download/:fileId").get(downloadFile).post(downloadFileWithPassword)

module.exports = router