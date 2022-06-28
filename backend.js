const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const { default: axios } = require('axios');
const bodyParser = require('body-parser')

// Create Express Server
const app = express();

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended:true}))

// Configuration
const PORT = 4000;
const HOST = "localhost";

// Logging
app.use(morgan('dev'));

app.get("/", (req, res) => res.send("..."));

let products = [
    {
        "name": "Arabica",
        "price": 20
    },
    {
        "name": "Robusta",
        "price": 15
    },
]

app.get('/products', (req, res) => {
    res.send(products);
})

app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product)
    res.send('added')
})

let users = [
    {
        "firstName": "John",
        "lastName": "Doe"
    },
    {
        "firstName": "LeBron",
        "lastName": "James"
    }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user)
    res.send('added')
})



// Start the Proxy
app.listen(PORT , HOST, () => {
    console.log(`Starting Proxy, hopefully it workss`);
 });
 


