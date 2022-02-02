// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// empty js object to be used
const projectData = {};
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, listening);
// listen for server to start and console.log it
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}
// get request
app.get('/all', function (req, res) {
  res.send(projectData)
})
// POST request
app.post('/addData', addData)

function addData(req,res){

    newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    feelings: req.body.feelings
    }
    projectData.push(newEntry)
    console.log(projectData)
    res.send(projectData)
  }