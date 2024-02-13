const router= require("express").Router()
const roomControllers= require("./../controllers/roomController")


router.get("/",roomControllers.getAllData)
router.get("/:id",roomControllers.getDataById)
router.delete("/:id",roomControllers.getDeleteData)
router.patch("/:id",roomControllers.getUpdateData)
router.put("/:id",roomControllers.getPutData)
router.post("/",roomControllers.postData)

module.exports = router