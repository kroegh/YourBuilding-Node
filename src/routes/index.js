const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
	res.json({ index: "Your building" });
});

module.exports = router;
