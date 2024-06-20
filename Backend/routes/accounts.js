const express = require("express")
const zod = require("zod")
const {User , Account} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const {authMiddleware} = require("../middleware")
const { default: mongoose } = require("mongoose")

const router = express.Router()

router.get("/balance", authMiddleware, async (req,res)=> { 
    const account  = await Account.findOne({
        userID : req.userID
    })

    res.json({
        balance: account.balance
    })
})

router.post("/transfer" , authMiddleware, async (req,res)=>{
    const session = await mongoose.startSession()

    session.startTransaction();
    const {amount , to} = req.body

    const account = await Account.findOne({
        userID : req.userID
    })

    if(account.balance < amount){
        return res.status(400).json({
            mssg : "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userID : to
    })

    if(!toAccount){
        return res.status(400).json({
            mssg : "User not found"
        })
    }

    await Account.updateOne({
        userID : req.userID
    },{
        $inc :{
            balance: -amount
        }
    })

    await Account.updateOne({
        userID: to
    },{
        $inc :{
            balance : amount
        }
    })
    await session.commitTransaction();
    res.json({
        mssg : "Transfer successful"
    })

})

module.exports = router