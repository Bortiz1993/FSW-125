const express = require('express')
const morgan = require('morgan')
const app = express();
const inventoryItemsRouter = require('../inventoryItemsRouter/inventoryItemsRouter');

const PORT = 3000

//aplication level middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/inventoryItems', inventoryItemsRouter)


//Server message
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});