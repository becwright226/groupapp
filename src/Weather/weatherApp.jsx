/* 
! TO DO:
! API URL & APIKEY
! construct the fetch
*/
import React, { useState } from 'react';

//! API Call by current weather data: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//! API call by zip code: api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// const baseURL = 'api.openweathermap.org/data/2.5/weather'

const APIkey = 'db81147a8b035b8d982970bd85456e4d'



const Weather = (props) => {

const lat = 39.970406
const lon = -85.966848
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
console.log(url)

const [temp, setTemp] = useState('click button for results');
const [description, setDescription] = useState('click button for results');

async function handleFetch() {
  
  try {
  const response = await fetch(url);
  const data = await response.json()
  console.log(data);
  setTemp(data.main.temp)
  setDescription(data.weather[0].description)
  } catch (err) {
    console.error(err)
  }
}


  return ( 
    <div>
    <h1>Hello from Weather</h1>
    <button onClick={handleFetch}></button>
    <h2>Current location will go here</h2>
    <h3>Current Weather Conditions: {description}</h3>
    <h3>Current Temperature: {temp}</h3>
    <button>Toggle to change units goes here</button>
  </div>
   );
}
 
export default Weather;