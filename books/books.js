const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://root:admin@cluster0.cojym.mongodb.net", {useNewUrlParser: true, useUnifiedTopology: true},   () =>
{
console.log("data base connected")
})
app.use(express.json())

let EmailModel = require('./model/book_model')


app.get('/', (req, res) => 
{
    
    res.send("books module is running")
})
app.post('/', async (req, res) => 
{
    let msg = new EmailModel(req.body)
    try{
    let a=await msg.save()
    console.log(a);
    console.log("huiiii");
    }
    catch(e)
    {
        console.log(e);
    }
    res.send("posted data")
})

app.listen(3000, () =>
{
    console.log("books module is running")
})