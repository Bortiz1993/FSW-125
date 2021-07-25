const express = require('express')
const app = express();
const {v4: uuidv4} = require('uuid');

const PORT = 3000

//aplication level middleware
app.use(express.json())

const bounties = [
    {FirstName: 'Ray', 
     LastName: 'SkyWalker',
     Living: true,
     BAmount: 100,
     Type: 'Jedi',
     _id: uuidv4()
},

];

//Post to add something ne
app.post(`/bounties`, (req, res) => {
    const newBountie = req.body;
    newBountie._id = uuidv4();
    bounties.push(newBountie);
    console.log(bounties)
    res.send(`Successfully added ${newBountie.FirstName} to the database`);
})

//Get all route
app.get(`/bounties`, (req, res) => {
    res.send(bounties)
});
//Server messege
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});