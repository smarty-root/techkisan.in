const userModel=require("../../models/user-model")
const bcrpty=require("bcrypt")
const {genrateToken}=require("../../utils/genrateAuthToken")
module.exports.registerUser=async(req,res)=>{
    try{
 const { name, email, password } = req.body;
 const saltRounds = 10;
 const salt = await bcrpty.genSalt(saltRounds);
 const hashedPassword = await bcrpty.hash(password, salt);
 const newUser= new userModel({ name, email, password: hashedPassword });
 await newUser.save()
  const token = genrateToken(newUser);
  res.status(200).send({message:"User Created Sucessfully",token:token})
    }
catch(e){
  console.log(e.message)
  res.status(500).send({message:"Internal Server Issue"})
}
}

module.exports.getUserProfile=async(req,res)=>{
  try{
    const id=req.user.id
    const user=await userModel.findById(id).select("-password")
    if(!user){
      return res.status(404).send({message:"User Not Found"})
    }
    res.status(200).send({message:"User Found",user:user})
  }
  catch(e){
    console.log(e.message)
    res.status(500).send({message:"Internal Server Issue"})
  }
}

module.exports.loginUser=async(req,res)=>{
  try{
    const { email, password } = req.body;
    const user=await userModel.findOne({email:email})
    if(!user){
      return res.status(404).send({message:"User Not Found"})
    }
    const isMatch=await bcrpty.compare(password,user.password)
    if(!isMatch){
      return res.status(401).send({message:"Invalid Credentials"})
    }
    const token = genrateToken(user);
    res.status(200).send({message:"User Logged In Sucessfully",token:token})
  }
  catch(e){
    console.log(e.message)
    res.status(500).send({message:"Internal Server Issue"})
  }
}