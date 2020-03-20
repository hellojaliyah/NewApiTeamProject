const express = require("express");
const router = express.Router();
const passport = require('passport')
const User = require('../models/user');


//Create a new user
router.post('/', function(req, res){ 
	
	Users=new User({email: req.body.email, username: req.body.username, name: req.body.name}); 

		User.register(Users, req.body.password, function(err, user) { 
			if (err) { 
			res.json({success:false, message:"Your account could not be saved. Error: ", err}) 
			}else{ 
			res.json({success: true, message: "Your account has been saved"}) 
			} 
		}); 
}); 

//Login

router.get('/login', (req, res) => {
// User.doLogin = function(req, res) { 
//   if(!req.body.username){ 
//     res.json({success: false, message: "Username was not given"}) 
//   } else { 
//     if(!req.body.password){ 
//     res.json({success: false, message: "Password was not given"}) 
//     }else{ 
//     passport.authenticate('local', function (err, user, info) { 
//       if(err){ 
//       res.json({success: false, message: err}) 
//       } else{ 
//       if (! user) { 
//         res.json({success: false, message: 'username or password incorrect'}) 
//       } else{ 
//         req.login(user, function(err){ 
//         if(err){ 
//           res.json({success: false, message: err}) 
//         }else{ 
//           const token = jwt.sign({userId : user._id, 
//           username:user.username}, secretkey, 
//             {expiresIn: '24h'}) 
//           res.json({success:true, message:"Authentication successfull", token: token }); 
//         } 
//         }) 
//       } 
//       } 
//     })(req, res); 
//     } 
//   } 
//   }; 
res.send("hello world")
})
  


// //Create new User
// router.post('/', async (req, res) => {
// // const {  name, email, password } = req.body;
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     });

//     try{
//       console.log("Hello World");
//         const newUser = await user.save();
//         res.status(201).json(newUser);
//     }catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

//Get All User
router.get("/", async (req, res) => {
  // console.log("Hello World");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Get One User
// //Read User By Name
// router.get("/:name", getUserByName, (req, res) => {
//     res.json(res.user);
//   });

//   //Update Name
//   router.patch("/:name", getUserByName, async (req, res) => {
//     if (req.body.name != null) {
//       res.user.name = req.body.name;
//     }
//     if (req.body.email != null) {
//       res.user.email = req.body.email;
//     }
//     if (req.body.password != null) {
//         res.user.token = req.body.password;
//       }
//     try {
//       const updatedUser = await res.user.save();
//       res.json(updatedUser);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
  
//   //Delete
//   router.delete("/:name", getUserByName, async (req, res) => {
//     try {
//       await res.user.remove();
//       res.json({ message: "Deleted User Profile" });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
//   //get one by Name function
//   async function getUserByName(req, res, next) {
//     let user;
//     let name = req.params.name;
//     try {
//       user = await User.findOne({ name });
//       if (user == null) {
//         return res.status(404).json({ message: "Cannot Find User's Name" });
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//     res.user = user;
//     next();
//   }
  
  module.exports = router;