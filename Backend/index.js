const express = require("express")
const cors = require("cors")
const mainRouter = require("./routes/index")
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.get("/" , (req,res)=>{
    res.json({
        mssg : "What's up dawg"
    })
})

app.use("/api/v1" , mainRouter)
app.listen(PORT) 