const User= require('../models/user')

async function handleGetAllUsers(req,res) {
    // show all users
    const allUsers=await User.find({})
    return res.json(allUsers)   
}

async function handleGetUserById(req,res) {
     // find the user
     const user=await User.findById(req.params.id);
     if(!user)
         return res.status(404).json({user:"User not found"})
     else
     return res.status(200).json(user)
}

async function handleUpdateUserById(req,res) {
    const {first_name, last_name, gender, job_title, email } = req.body;
    if (!first_name || !last_name || !gender || !job_title || !email) {
        return res.status(400).json({ msg: "All fields are required!" });
    }
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { 
                firstName: first_name,
                lastName: last_name,
                gender: gender,
                jobTitle: job_title,
                email: email 
            },
        );
        res.send(user)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

async function handleDeleteUserById(req,res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        
        res.status(200).json({ msg: `${user.firstName} deleted successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
}


async function handleCreateNewUser(req,res) {
    // create new users
    const body=req.body;
    if(!body|| !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required!"})
    }
    const result=await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
    })
   
    
    return res.status(201).json({msg:"User created successfully!", id:result._id})
}

module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}