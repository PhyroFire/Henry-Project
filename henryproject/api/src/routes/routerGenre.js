const { Router } = require("express");
const filterGenres = require("../handlers/filterGenres");
const getGenres = require("../handlers/getGenres");

const router = Router();

router.get("/",async(req,res)=>{
    return res.status(200).json(await getGenres());
})

module.exports=router;
