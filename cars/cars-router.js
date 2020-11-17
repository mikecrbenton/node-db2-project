const express = require("express")
const db = require("../data/config")

const router = express.Router()

// GET ==================================================
router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("car-dealer"))
	} catch(err) {
		next(err)
	}
})

// GET BY ID =============================================
router.get("/cars/:id", async (req, res, next) => {
	try {

		const { id } = req.params
		const car = await db("car-dealer").where({ id }).first()
      res.json(car)
      
	} catch(err) {
		next(err)
	}
})

// POST =================================================
router.post("/cars", async (req, res, next) => {
	try {

		const [id] = await db("car-dealer").insert(req.body)
		const newCar = await db("car-dealer").where({ id }).first()
      res.status(201).json(newCar)
      
	} catch(err) {
		next(err)
	}
})



module.exports = router