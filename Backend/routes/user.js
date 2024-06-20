const express = require("express")
const zod = require("zod")
const {User , Account} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const {authMiddleware} = require("../middleware")

const router = express.Router()

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string()
})
router.post("/signup", async (req,res)=>{
    const body = req.body
    const success = signupSchema.safeParse(body)
    if(!success.success){
        return res.status(411).json({
            mssg : "Email already taken / Incorrect inputs"
        })
    }

    const existinguser = await User.findOne({
        username : body.username
    })
    
    if(existinguser) {
        return res.status(410).json({
            mssg : "Email already taken / Incorrect inputs"
        })
    }

        const user = await  User.create({
        username: body.username,
        firstName : body.firstName,
        lastName : body.lastName,
        password : body.password
    })

    const userID = user._id
    
    await Account.create({
        userID,
        balance : 1+ Math.random() * 10000 
    })    

    const token = jwt.sign({
        userID
    },JWT_SECRET)

    res.json({
        mssg : "User Created Successfully",
        token : token
    })
    
})

const signinSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})


router.post("/signin", async (req,res)=>{
    const body = req.body
    const success2 = signinSchema.safeParse(body)
    if(!success2.success){
       return res.status(411).json({
                mssg : "Email already taken / Incorrect inputs"
        })
    }

    const findUser = await User.findOne({
      username: body.username,  
      password : body.password
    })
    if (findUser) {
        const userID = findUser._id
    
        const token = jwt.sign({
            userID
        },JWT_SECRET)
    
         res.json({
            mssg : "User sigin in successfully",
            token : token
        })
        return
    }
    // if(!findUser){
    //     return res.send({ 
    //         mssg : "Invalid username or password"
    //     })
    // }

    // if(findUser.password != body.password){
    //     return res.send({
    //         mssg : "Invalid username or password "
    //     })
    // }

    res.status(411).json({
        mssg: "Error while logging in"
    })

})

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional(),
})

// router.put("/", authMiddleware, async (req,res)=>{
//     const body = req.body
//     const {success} = updateBody.safeParse(body)
//     if(!success){
//         return res.send(403).json({
//             mssg : " Error while updating information"
//         })
//     }

//    await User.updateOne(body,{
//     id : req.userID
//    })

//    req.json({
//     mssg: "Updated successfully"
//    })

// })

router.get("/bulk",authMiddleware ,async (req,res)=>{
    const filter = req.query.filter || ""
    const users = await User.find({

        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user :users.map(lolo => ({
                username : lolo.username,
                firstName : lolo.firstName,
                lastName: lolo.lastName,
                _id: lolo._id
        }))
    })
})

module.exports = router