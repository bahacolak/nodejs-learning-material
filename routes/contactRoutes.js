const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    console.log("got all contacts");
    res.status(200).json({message:"got all contacts"});
});

module.exports = router;