const express = require('express')
const app = express();

const PORT = 3000

const users = [
    {name: 'Brijido', location: 'Silent Hill'},
    {name: 'Arturo', location: 'Monmouth'},
    {name: 'Adrian', location: 'Park'},
    {name: 'Angie', location: 'House'},
];

const movies = [
    {name: 'A Boy and His Dog'},
    {name: 'Jon Wick'},
    {name: 'Armored'},
    {name: 'The SpongeBob Movie'},

];

const vehicles = [
    {name: 'D-Wheel'},
    {name: 'Taxi'},
    {name: 'Motorcycle'},
    {name: 'Jet Boat'},
]

app.get('/users', (req, res) => {
    res.send(users)

});

app.get('/movies', (req, res) => {
    res.send(movies)

});

app.get('/vehicles', (req, res) => {
    res.send(vehicles)
})





app.listen(PORT, () =>{
    console.log('Our first server Express.js has been started on port 3000')
})