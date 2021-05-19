const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://root:admin@cluster0.cojym.mongodb.net/first-db", {useNewUrlParser: true, useUnifiedTopology: true},   () =>
{
console.log("data base connected")
})
app.use(express.json())

let EmailModel = require('./model/cust_model')


app.get('/', (req, res) => 
{
    
    res.send("cust module is running")
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

app.get('/Customer/:id', async (req, res) => 
{
    let id=req.params.id;
    try{
    let book=await EmailModel.findById(id)
    console.log(book);
    res.json(book)
    }
    catch(e)
    {
        console.log(e)
    }
    
})

app.listen(4000, () =>
{
    console.log("cust module is running")
})