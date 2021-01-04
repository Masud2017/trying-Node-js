var express = require("express");
var router = express.Router();

router.get("/",(req,res,next)=> {
	res.json("Hello world this is from index route");
});

module.exports = router;
