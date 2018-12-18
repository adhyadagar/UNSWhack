const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path = require('path')
const sha256=require('sha256')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.get('/',(req,res)=>{


    var currentdate = new Date(); 
    var datetime = `${currentdate.getDate()}${(currentdate.getMonth()+1)}${currentdate.getFullYear()}${currentdate.getHours()}${currentdate.getMinutes()}${currentdate.getSeconds()}`;
    datetimeHash = sha256(datetime)
    console.log(datetime)

    res.sendfile('form.html')


})

app.post('/',(req,res)=>{
    radio=req.body.rad
    pincode=req.body.pincode

    value={
        radio,
        pincode
    }

    var currentdate = new Date();
    var datetime = `${currentdate.getDate()}${(currentdate.getMonth()+1)}${currentdate.getFullYear()}${currentdate.getHours()}${currentdate.getMinutes()}${currentdate.getSeconds()}${value.radio}${value.pincode}`;        

    console.log(req.body)
    res.json(datetime)
})

app.listen(3000,()=>{
    console.log('server started at 3000')
})

