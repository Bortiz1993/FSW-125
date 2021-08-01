const express = require('express');
const bountiesRouter = express.Router();
const  {v4: uuidv4 } = require('uuid');

const bounties = [
    {FirstName: 'Ray', 
     LastName: 'SkyWalker',
     Living: true,
     BAmount: 100,
     Type: 'Jedi',
     _id: uuidv4()
},

];


//Post to add something new
bountiesRouter.post(`/`, (req, res) => {
    const newBountie = req.body;
    newBountie._id = uuidv4();
    bounties.push(newBountie);

    console.log(bounties)
    res.send(`Successfully added ${newBountie.FirstName} to the database`);
})


//Get all route
bountiesRouter.get(`/`, (req, res) => {
    res.send(bounties)
});

bountiesRouter.get('/:bountiesId', (req, res) =>{
    console.log(req.params)
})

module.exports = bountiesRouter;


