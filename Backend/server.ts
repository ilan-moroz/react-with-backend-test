import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import ErrorHandler from './MiddleWare/routeNotFound'
import config from './Utils/Config'
import logic from './Logic/tableLogicMYSQL'
import Router from './Routes/Route'

// Create Server
const server = express()

// Handle CORS
server.use(cors())

//How we send the data back
server.use(express.json())

//Parse the body as JSON
server.use(bodyParser.json())

// How to use routes
server.use('/api/v1/meetings', Router)
// server.use('/api/v1/vacation/')

//Create the tables if they not exists
console.log('check if table exists...')
logic.createMeetingsTable()
logic.createProductionTable()

// Handle errors (route not found)
server.use('*', ErrorHandler)

// Start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`)
})
