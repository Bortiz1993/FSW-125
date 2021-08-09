const express = require('express')
const app = express();
const bountiesRouter = require('./routers');
const morgan = require('morgan')


const PORT = 9000

//application level middleware
app.use(express.json())
app.use(morgan('dev'))

app.use('/bounties', bountiesRouter)


//Server message
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});