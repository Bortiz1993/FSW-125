const express = require('express');
const bountiesRouter = express.Router();
const  {v4: uuidv4 } = require('uuid');

const bounties = [
    {FirstName: 'Ray', 
     LastName: 'SkyWalker',
     LightSaber: 'Green',
     Living: true,
     BAmount: 100,
     Type: 'Jedi',
     _id: uuidv4()
},

];

//Get all route
bountiesRouter.get(`/`, (req, res) => {
    res.status(200).send(bounties)
});

 bountiesRouter.get('/:bountiesId', (req, res) =>{
     const bountiesId = req.params.bountiesId;
    const singleBounty = bounties.find(bounty => bounty._id === bountiesId)
    
    if (!singleBounty) {
        const error = new Error('This item was not found');
        return res.status(404).next(error);
    }

     res.status(200).send(singleBounty);
 })

 //Query Get search
 .get('/search/LightSaber',(req, res) => {
     const bountiesLightSaber = req.query.LightSaber;
     const filteredLightSabers = bounties.filter(bounty => bounty.LightSaber === bountiesLightSaber)
    
    res.status(200).send(filteredLightSabers)
    console.log(re.query);
 })

//post a route

bountiesRouter.post(`/`, (req, res) => {
    const newBountie = req.body;
    newBountie._id = uuidv4();
    bounties.push(newBountie);

   res.status(201).send(newBountie);
})

//Delete route.
.delete('/:bountiesId', (req, res) =>{
    const bountiesId = req.params.bountiesId;
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId);
    bounties.splice(bountiesIndex, 1);

    res.status(201).send('Successfully deleted!')
})

//Put route.

.put('/:bountiesId', (req,res) => {
    const bountiesId = req.params.bountiesId;
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId);
     Object.assign(bounties[bountiesIndex], req.body)

   res.status(201).send(bounties[bountiesIndex]);
})


module.exports = bountiesRouter;


