var Sequelize = require('sequelize');
var sequelize = new Sequelize({
	dialect : 'sqlite',
	storage: './userDb.sqlite'
});

const users = sequelize.define('users',{name:Sequelize.STRING,username:Sequelize.STRING,password:Sequelize.STRING});

sequelize.authenticate().then(()=>{
	console.log("Connected to user database :");
}).catch(err=> {
	console.log('Unable to connect to the database : ',err);
});

exports.userDb = ()=> {
	var insert = (user)=> {
		users.create({name:user.name,username:user.username,password:user.password});
	}
}
