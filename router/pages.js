
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("", (req,res) => {
    console.log("메인 페이지로");
    res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;