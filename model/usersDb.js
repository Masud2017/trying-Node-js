var express = require("express")
var router = express.Router()

var Sequelize = require("sequelize");
var sequelize = new Sequelize({
	// the host paramter is required for other database
	// host : 'localhost'
	
	dialect : 'sqlite',
	storage : './database.sqlite'
});

const notes = sequelize.define('notes',{note:Sequelize.TEXT,tag: Sequelize.STRING});
sequelize.authenticate().then(()=> {
	console.log('Connection has been established successfully.');
}).catch(err=> {
	console.error('Unable to connect to the database: ',err);
});
sequelize.sync({force:true}).then(()=> {
	console.log("Database & tables created");

	notes.bulkCreate([
		{note: 'pick up some bread after work',tag:'shopping'},
		{note: 'remember to write up meeting notes',tag: 'work'},
		{note: 'learn how to use node orm',tag: 'work'}
	]).then(()=>{
		return notes.findAll();

	}).then(()=>{
		console.log(notes);
	})
});
var getData = 34;


router.get ('/showDb/',(req,res,next)=> {
	notes.findAll().then(notes=>{
		for (var i = 0; i < notes.length;i++) {
			delete notes[i].dataValues.createdAt;
			delete notes[i].dataValues.updatedAt;
		}
		res.json(notes)
	});
});
router.get ('/showDb/:id?',(req,res,next)=> {
	
	notes.findAll({where:{id:req.params.id}}).then(notes=>{
		for (var i = 0; i < notes.length;i++) {
			delete notes[i].dataValues.createdAt;
			delete notes[i].dataValues.updatedAt;
		}

		res.json(notes)
	});
});
router.get('/add/:note/:tag',(req,res,next)=> {
	notes.create({note:req.params.note,tag: req.params.tag}).then((note)=> {
		res.redirect('/showDb');
	});
});

module.exports = router;
