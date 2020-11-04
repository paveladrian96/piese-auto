const express = require("express")
const router = express.Router()

const {create, subtipPieseAutoById, update , remove, read, list, photo, listRelatedByName, piesaByTip} = require('../controllers/subtipPieseAuto')

const {requireSignin , isAuth, isAdmin} = require("../controllers/auth")
const { userById } = require('../controllers/user')

router.post("/subtipPieseAuto/create/:userId", requireSignin , isAuth, isAdmin, create)
router.put("/subtipPieseAuto/:subtipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, update)
router.delete("/subtipPieseAuto/:subtipPieseAutoId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/subtipPieseAuto/:subtipPieseAutoId", read)
router.get("/subtipuriPieseAuto", list)
router.get("/subtipPieseAuto/related/:subtipPieseAutoId", listRelatedByName)
router.get("/subtipPieseAuto/photo/:subtipPieseAutoId", photo)

router.param('piesaTip', piesaByTip)
router.param('userId', userById)
router.param('subtipPieseAutoId', subtipPieseAutoById)

module.exports = router