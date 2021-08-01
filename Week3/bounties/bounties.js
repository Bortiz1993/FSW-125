const express = require('express')
const app = express();
const bountiesRouter = require('./routers');

const PORT = 3000

//aplication level middleware
app.use(express.json())

app.use('/bounties', bountiesRouter)


//Server messege
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});