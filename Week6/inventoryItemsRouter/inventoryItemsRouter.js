const express = require('express');
const inventoryItemsRouter = express.Router();
//const  {v4: uuidv4 } = require('uuid');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,

    },{
        name:"pants",
        type:"clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,

    },
    {
        name: "soup",
        type: "food",
        price: 300,

    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

//Get all route
inventoryItemsRouter.get(`/`, (req, res) => {
    res.send(inventoryItems)
});

//Get Queries.

inventoryItemsRouter.get('/search/name',(req, res) => {
    const inventoryName = req.query.name;
    const filteredName = inventoryItems.filter(inventoryItems => inventoryItems.name === inventoryName)
   
    res.send(filteredName)
   console.log(re.query);
}).get('/search/type',(req, res) => {
    const inventoryType = req.query.type;
    const filteredType = inventoryItems.filter(inventoryItems => inventoryItems.type === inventoryType)
   
    res.send(filteredType)
   console.log(re.query);
}).get('/search/price',(req, res) => {
    const inventoryPrice = req.query.price;
    const parsePrice = Number(inventoryPrice)
    const filteredPrice = inventoryItems.filter(inventoryItems => inventoryItems.price === parsePrice)
   
    res.send(filteredPrice)
   console.log(re.query);
});



module.exports = inventoryItemsRouter;