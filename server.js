import express from "express";
const app = express();


app.get("/home",(req,res)=>{
    res.send({message:"ok hai darling"})
})

app.listen(3000,()=>{
    console.log(`server listening on 3000`)
})
