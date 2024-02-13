const router= require("express").Router()
const hotelControllers= require("./../controllers/hotelControllers")
const userAuth= require("./../middlewares/userAuthMiddle")

router.get("/",hotelControllers.getAllData)
router.get("/:id",hotelControllers.getDataById)
router.delete("/:id",hotelControllers.getDeleteData)
router.patch("/:id",hotelControllers.getUpdateData)
router.put("/:id",hotelControllers.getPutData)
router.post("/",hotelControllers.postData)

module.exports = router