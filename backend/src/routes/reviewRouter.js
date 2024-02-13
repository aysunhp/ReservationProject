const router= require("express").Router()
const reviewControllers= require("../controllers/reviewController")


router.get("/",reviewControllers.getAllData)
router.get("/:id",reviewControllers.getDataById)
router.delete("/:id",reviewControllers.getDeleteData)
router.patch("/:id",reviewControllers.getUpdateData)
router.put("/:id",reviewControllers.getPutData)
router.post("/",reviewControllers.postData)

module.exports = router