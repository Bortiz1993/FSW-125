const express = require('express')
const app = express();
const bountiesRouter = require('./routers');
const morgan = require('morgan')


const PORT = 9000

//application level middleware
app.use(express.json())
app.use(morgan('dev'))

//routers
app.use('/bounties', bountiesRouter)

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).next({errMsg: err.message})
})



//Server message
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});