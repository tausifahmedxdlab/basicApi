const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {CreateUser,CreaterinverterData} = require('../models/model.js');



router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/get/alldevice', async(req, res)=>{
    try{
        const alldevice = await CreateUser.find();
        res.status(201).json({
            "Type":"Success",
            "message":alldevice
        });
    }catch(error){
        res.status(201).json({
            "Type":"Failed",
            "message":error
        });
    }
})

router.post('/add/devicedata',async(req,res)=>{
    console.log(req.body);
    try{
        const newUser = new CreateUser({
            IMEI:req.body.IMEI,
            SIM: req.body.SIM
        });
        await newUser.save();
        res.status(201).json({
            "Type":"Success",
            "message":newUser
        });
    }
    catch(error){
        console.log(error);
        res.status(201).json({
            "Type":"Failed",
            "message":error
        });
    }
})

router.post('/add/inverterdata',async(req,res)=>{
        console.log(req.body);
        try{
            const newUser = new CreaterinverterData({
                IMEI:req.body.IMEI,
                SIM: req.body.SIM,
                DATE_TIME:req.body.datetime,
                BATTERY_VOLTAGE:req.body.BVOLT,
                BATTERY_CURRENT:req.body.BCURR,
                PANEL_VOLTAGE:req.body.PVOLT,
                PANEL_CURRENT:req.body.PCURR,
                PANEL_POWER:req.body.PPOW,
                AC_INPUT_VOLTAGE:req.body.ACINVOLT,
                AC_INPUT_FREQUENCY:req.body.ACINFREQ,
                AC_OUTPUT_VOLTAGE:req.body.ACOUTVOLT,
                AC_OUTPUT_FREQUENCY:req.body.ACOUTFREQ,
                LOAD_PERCENTAGE:req.body.LOADPER,
                TOTAL_ENERGY:req.body.TOTENGR,
                CUMULATIVE_ENERGY:req.body.CUMENGR,
                FAULT:req.body.FAULT,
                LATITUDE:req.body.LAT,
                LONGITITUDE:req.body.LON
            });
           await newUser.save();
            res.status(201).json({
                "Type":"Success",
                "message":newUser
            });
        }
        catch(error){
            console.log(error);
            res.status(201).json({
                "Type":"Failed",
                "message":error
            });
        }

})

router.post('/get/getinverterdata', async (req, res) => {
    console.log(req.body);
    // try {
    //     const IMEI = req.body.IMEI;

    //     // Use await to get the result of the Mongoose query
    //     const InverterData = await CreaterinverterData.findOne({ IMEI: IMEI });

    //     if (InerterData) {
    //         res.status(200).json({
    //             Type: "Success",
    //             message: InverterData
    //         });
    //     } else {
    //         res.status(404).json({
    //             Type: "Failed",
    //             message: "Data Not Available"
    //         });
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         Type: "Failed",
    //         message: "Internal Server Error"
    //     });
    // }

    try {
        const IMEI = req.body.IMEI;
        const inverterData = await CreaterinverterData.find({ IMEI: IMEI });
        if (inverterData.length > 0) {
            res.render('index', {inverterdata: inverterData});
        } else {
            res.render('index', {inverterdata:null, error: 'No data found' });
        }
    } catch (error) {
        console.log(error);
        res.render('index', {inverterdata:null, error: 'Internal Server Error' });
    }
});

module.exports = router;
