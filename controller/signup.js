
exports.signup = async (req,res)=>{
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password,salt);

	const user = new User 
}
