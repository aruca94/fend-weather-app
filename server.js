// Require Express to run server and routes
// var name from lesson 2.1
const express = require('express');
// Start up an instance of app
// var name from lesson 2.1
const app = express();
// empty js object to be used
  const projectData = {};
/* Dependencies */
// from lesson 2.1
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// from lesson 2.1
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
// from lesson 2.1
const cors = require('cors');
app.use(cors());
// Initialize the main project folder

app.use(express.static('website'));
// Setup Server
// lesson 2.6
const port = 8000;
const server = app.listen(port, listening);
// listen for server to start and console.log it
// lesson 2.6
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}
// get request
// lesson 3.3
app.get('/get', function (req, res) {
  res.send(projectData)
})
// POST request
// lesson 3.4
app.post('/post', postData)

function postData(req,res){
    projectData.temp = req.body.temp;
    projectData.date = req.body.date,
    projectData.feelings = req.body.feelings
    res.send(projectData);
  };