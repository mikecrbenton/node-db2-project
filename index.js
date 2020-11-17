const express = require("express")

const testRouter = require("./test-router/test")
const carsRouter = require("./cars-router/cars")

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use(testRouter)
server.use(carsRouter)

server.use( (err, req, res, next) => {
   console.log( "ERROR: ", err )
   res.status(500).json( { message: "500 Server Error "})
})

server.listen( port, () => { console.log(`Running on port ${port}`)})