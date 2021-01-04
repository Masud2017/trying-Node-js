var express = require("express")
var router = express.Router()
var sendable = {
[0]: {	name : "Masud karim",
	age : 21
},
	[1]: {
		name :"Rifat",
			age:21,
	}
}
router.get('/',(req,res,next)=> {
	// first pull data from data base and then send it throught the session
	res.json(sendable)
})

module.exports = router
