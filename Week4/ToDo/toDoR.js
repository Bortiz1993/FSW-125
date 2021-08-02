const express = require('express');
const toDoRouter = express.Router();
const  {v4: uuidv4 } = require('uuid');

const toDos = [
    {Name: 'Go to Soccer practice', 
     Description: 'It is time for training',
     ToDoNum: 1,
     isCompleted: false,
     _id: uuidv4()
},

];

//Get all route
toDoRouter.get(`/`, (req, res) => {
    res.send(toDos)
});

 toDoRouter.get('/:toDosId', (req, res) =>{
     const toDosId = req.params.toDosId;
    const singleToDo = toDos.find(toDo => toDo._id === toDosId)
    console.log(req.params)

     res.send(singleToDo);
 })

 .get('/search/imageURL',(req, res) => {
     const toDoNUM = req.query.ToDoNum;
     const filteredToDos = toDos.filter(toDo => toDo.ToDoNum === toDoNUM)
    
     res.send(filteredToDos)
    console.log(re.query);
 })



//post a route

toDoRouter.post(`/`, (req, res) => {
    const newToDos= req.body;
    newToDos._id = uuidv4();
    toDos.push(newToDos);

    res.send(`Successfully added ${newToDos.Name} to the database`);
})

.delete('/:toDosId', (req, res) =>{
    const toDosId = req.params.toDosId;
    const toDosIndex = toDos.findIndex(toDo => toDo._id === toDosId);
    toDos.splice(toDosIndex, 1);

    res.send('Successfully deleted!')
})

.put('/:toDosId', (req,res) => {
    const toDosId = req.params.toDosId;
    const  toDosIndex = toDos.findIndex(toDo => toDo._id === toDosId);
     Object.assign(toDos[toDosIndex], req.body)

    res.send('Successfully updated');
})


module.exports = toDoRouter;
