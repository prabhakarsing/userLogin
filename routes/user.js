const express =require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send(" Errro Occured");
})

module.exports=router;