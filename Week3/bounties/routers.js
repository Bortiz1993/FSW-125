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
    res.send(bounties)
});

 bountiesRouter.get('/:bountiesId', (req, res) =>{
     const bountiesId = req.params.bountiesId;
    const singleBounty = bounties.find(bounty => bounty._id === bountiesId)
    console.log(req.params)

     res.send(singleBounty);
 })

 //Query Get search
 .get('/search/LightSaber',(req, res) => {
     const bountiesLightSaber = req.query.LightSaber;
     const filteredLightSabers = bounties.filter(bounty => bounty.LightSaber === bountiesLightSaber)
    
     res.send(filteredLightSabers)
    console.log(re.query);
 })

//post a route

bountiesRouter.post(`/`, (req, res) => {
    const newBountie = req.body;
    newBountie._id = uuidv4();
    bounties.push(newBountie);

    res.send(newBountie);
})

//Delete route.
.delete('/:bountiesId', (req, res) =>{
    const bountiesId = req.params.bountiesId;
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId);
    bounties.splice(bountiesIndex, 1);

    res.send('Successfully deleted!')
})

//Put route.

.put('/:bountiesId', (req,res) => {
    const bountiesId = req.params.bountiesId;
    const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId);
     Object.assign(bounties[bountiesIndex], req.body)

    res.send(bounties[bountiesIndex]);
})


module.exports = bountiesRouter;


