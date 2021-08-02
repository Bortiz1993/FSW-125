const express = require('express')
const app = express();
const toDoRouter = require('./toDoR');

const PORT = 3000

//aplication level middleware
app.use(express.json())
//app.use(morgan('dev'))

app.use('/toDos', toDoRouter)


//Server messege
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});