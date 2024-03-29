const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");


require("dotenv").config()


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Quantum IT Innovation")
})
app.use("/users",userRouter)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log({msg:"connected to DB"})
    } catch (error) {
        console.log(error.message)
    }
    console.log({msg:`Server is running on in the port ${PORT}`})
})


