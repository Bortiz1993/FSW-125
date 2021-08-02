const express = require('express')
const morgan = require('morgan')
const app = express();
const toDoRouter = require('./toDoR');

const PORT = 3000

//aplication level middleware
app.use(express.json())
app.use(morgan('dev'))

app.use('/toDos', toDoRouter)


//Server message
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});