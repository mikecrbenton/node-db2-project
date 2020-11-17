const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
   res.json( { message: "Successful Connection to Server"})
})

module.exports = router