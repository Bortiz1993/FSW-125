const express = require('express')
const app = express();
const bountiesRouter = require('./routers');
const morgan = require('morgan')


const PORT = 9000

//aplication level middleware
app.use(express.json())
app.use(morgan('dev'))

app.use('/bounties', bountiesRouter)


//Server messege
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});