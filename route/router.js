const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CreateUser = require('../models/model.js');



router.get('/home', (req, res)=>{
    res.send("home API");
})

router.get('/get/alldevice', async(req, res)=>{
    try{
        const alldevice = await CreateUser.find();
        res.send(alldevice);
    }catch(error){
        res.send("message:",error);
    }
})

router.post('/add/devicedata',(req,res)=>{
    console.log(req.body);
    try{
        const newUser = new CreateUser({
            IMEI:req.body.IMEI,
            SIM: req.body.SIM
        });
        newUser.save();
        res.send("message: Save in DataBase")
    }
    catch(error){
        console.log(error);
        res.send("message: Failed");
    }

})

module.exports = router;
