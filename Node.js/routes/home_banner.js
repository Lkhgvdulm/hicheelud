const express = require("express");
const router = express.Router();
const { getHome_Banners,
    getHome_Banner,
     createHome_Banner, 
     updateHome_Banner, 
     deleteHome_Banner } = require("../controller/home_banner");

router.route("/").get(getHome_Banners);
router.route("/:id").get(getHome_Banner);
router.route("/:id").post(createHome_Banner);
router.route("/:id").put(updateHome_Banner);
router.route("/:id").delete(deleteHome_Banner);
module.exports = router;