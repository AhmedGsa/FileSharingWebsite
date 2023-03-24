const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.render("index");
});
router.route("/:anyUrl").get((req,res) => {
    res.render("error", { msg: "Page not found" , statusCode: 404});
})

module.exports = router