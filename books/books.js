const express=require('express')
const app=express()

app.get('/', (req, res) => 
{
    
    res.send("books module is running")
})

app.listen(4545, () =>
{
    console.log("books module is running")
})