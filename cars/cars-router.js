const express = require("express")
const db = require("../data/config")

const router = express.Router()

// GET=============================================
router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("car-dealer"))
	} catch(err) {
		next(err)
	}
})



module.exports = router