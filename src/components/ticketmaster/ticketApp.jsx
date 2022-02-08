/* 
! TO DO:
! API URL & APIKEY
! construct the fetch
*/
import React, { useState } from 'react';

//! API Call by current weather data: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//! API call by zip code: api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// const baseURL = 'api.openweathermap.org/data/2.5/weather'

const APIkey = 'rONC9qHJ2cvhiPBd2dcdoACdEU3ibUCF'



const Event = (props) => {

const lat = 39.970406
const lon = -85.966848
const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&apikey=${APIkey}`


//const [image, setImage] = useState("");
const [name, setName] = useState("");
const [distance, setDistance] = useState("");
const [events, setEvents] = useState("");



//ONLOAD
fetch(url)
.then((res) => {
    return res.json();
}) .then((data) => {
    console.log(data) 
    setEvents(data._embedded.events[7].name)
    setDistance(data._embedded.events[7].distance)
})
return ( 
    <div>
    <h1>Image goes here in slide show style??</h1>
   
    <h2>Current Location</h2>
    <h2> {events} </h2>
    <h5> {distance} miles from current location</h5>
  
  </div>
   );
}

export default Event;
/*async function handleFetch() {
 
 try {
 const response = await fetch(url);
 const data = await response.json()
 console.log(data._embedded.events[16])
 setEvents(data._embedded.events[16].name)
 setDistance(data._embedded.events[16].distance)
// console.log(data._embedded.events.name);
 } catch (err) {
   console.error(err)
 }
} */