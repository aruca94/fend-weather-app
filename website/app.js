/* Global Variables */
const zip=  document.getElementById('zip').value;
// url and api key
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&APPID=7ba3097fa4618bff87a065e43d2562b1&units=imperial';
// Create a new date instance dynamically with JS
const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// feeling, zip, and date variables below
const getValues = (e) => {
  const feelings = document.getElementById('feelings').value;
  const zip =  document.getElementById('zip').value;
  const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// post data to the object
// lesson 4.9 & lesson 4.10
  dataToObject(url , zip , key )
  .then (function(data) {
      post('/post' ,{temp:data.main.temp ,date:newDate, feelings: feelings} )
  })
  .then(() =>
      updateUI()
  )};
// event listener
document.getElementById('generate').addEventListener('click', getValues);
// GET data from API function
// lesson 4.2
const dataToObject = async (url, zip, key)=>{
  const res = await fetch(url + zip + key)
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
// lesson 3.6 & lesson 4.2
const post = async ( url = '', data = {}) => {
    const res = await fetch(url, {
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
    const dataResponse = await res.json();
    console.log(dataResponse);
    return dataResponse
}catch(error){
    console.log("error", error);
}
}
// update user inputs and place in bottom box
// lesson 4.10
const updateUI = async() => {
  const req = await fetch('/get');
  try {
      const compData = await req.json();
      const last = compData[compData.length-1];
      // console.log(compData);
      // update new entry values
          document.getElementById('date').innerHTML = `date: ${last.date}`;
          document.getElementById('temp').innerHTML = `Temperature: ${last.temp}`;
          document.getElementById('content').innerHTML = `feeling: ${last.feelings}`;
  } catch (error) {
      console.log('error', error);
  }
};