const express = require("express");
const router = express.Router();
// const { 
//     getHome_Pages ,
//     getHome_Page,
//     createHome_Page,
//     updateHome_Page,
//     deleteHome_Page,
// } = require("../controller/home_page");

const {getHome_Pages,} =require("../controller/home_page");

// 200 ni amjilttai gsn ug 404 ni utga alga buyu amjiltgui 500 ni buh zuil amjiltgu buyu aldaatai bolloo 
 
// router.route("/").get(getHome_Pages);
router.route("/").get(getHome_Pages);


