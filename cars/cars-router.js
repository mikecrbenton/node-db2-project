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

// PUT ==================================================
router.put("/cars/:id", async(req,res,next) => {
   try{
      const payload = {
         VIN : req.body.VIN,
         make : req.body.make,
         model : req.body.model,
         mileage : req.body.mileage,
         manual : req.body.manual,
         title_status : req.body.title_status
      }

      if(!payload.VIN || !payload.mileage || !payload.make || !payload.model   ) {
         return res.status(400).json( {message: "Need VIN, make, model, and mileage"})
      }

      await db("car-dealer").where("id", req.params.id).update(payload)

      const updatedCar = await db
         .first("*")
         .from("car-dealer")
         .where("id", req.params.id)

      res.json(updatedCar)

   }catch(err){
      next(err)
   }
} )

// DELETE ===============================================
router.delete("/cars/:id", async(req, res, next) => {
   try{
    // DON'T FORGET WHERE!!!  DON'T DELETE YOUR DATABASE LIKE A CHUMP
      await db("car-dealer").where("id", req.params.id).del()
      res.status(204).end() //204 = success empty response
      
   }catch(err){
      next(err)
   }
})



module.exports = router