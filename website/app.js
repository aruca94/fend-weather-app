/* Global Variables */
const zipCode =  document.getElementById('zip').value;
// url and api key
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=7ba3097fa4618bff87a065e43d2562b1&units=imperial';
// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// feeling, zipcode, and date variables below
const performAction = (e) => {
  const feelings = document.getElementById('feelings').value;
  const zipCode =  document.getElementById('zip').value;
  const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// post data to the object
  getData(baseURL , zipCode , apiKey )
  .then (function(data) {
      postData('/addData' ,{temp:data.main.temp ,date:newDate, feelings: feelings} )
  })
  .then(() =>
      updateUI()
  )};
// event listener
document.getElementById('generate').addEventListener('click', performAction);
// GET data from API function
// from https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/
const getData = async (baseURL, zipCode, apiKey)=>{
  const res = await fetch(baseURL + zipCode + apiKey)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
// post data
const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          temp: data.temp,
          date: data.date,
          feelings: data.feelings
      })
    });

try {
    const newData = await response.json();
    console.log(newData);
    return newData
}catch(error){
    console.log("error", error);
}
}
// update user inputs and place in bottom box
const updateUI = async() => {
  const request = await fetch('/all');
  try {
      const allData = await request.json();
      let lasty = allData[allData.length-1];
      console.log(allData);
      // update new entry values
          document.getElementById('date').innerHTML = `date: ${lasty.date}`;
          document.getElementById('temp').innerHTML = `Temperature: ${lasty.temp}`;
          document.getElementById('content').innerHTML = `feeling: ${lasty.feelings}`;
  } catch (error) {
      console.log('error', error);
  }
};