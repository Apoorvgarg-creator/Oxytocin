// Download postgres
// Mark port as 5432 and select a password for server
// Make a database named shops_database
// make a table named shops with 2 columns id and name

// fill the details in db and run npm start
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    port: '5432',
    password : '[your own password]',
    database : 'shops_database'
  }
});

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});


// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {
  //Whatsapp setup(run)
  // const messaenger = require('./messenger.js')
  // await messaenger.messaenger_function(req);

  //Adding row in shops and a new table for that shop (run)
  // const shop_adder = require('./shop_module.js')
  // await shop_adder.shop_adder(req,res,db);
  // await shop_adder.shop_db_adder(req,db);

  //Updating Inventory (Half-Implemented don't run)
  // const update_inventory = require('./update_inventory.js');
  // await update_inventory.update_inventory(req,res,db);
});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});