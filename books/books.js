const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://root:admin@cluster0.cojym.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true},   () =>
{
console.log("data base connected")
})



app.get('/', (req, res) => 
{
    
    res.send("books module is running")
})

app.listen(4545, () =>
{
    console.log("books module is running")
})