/* 
! TO DO:
! API URL & APIKEY
! construct the fetch
*/

//! API Call by current weather data: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//! API call by zip code: api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// const baseURL = 'api.openweathermap.org/data/2.5/weather'
// async function handleFetch() {
  
//   try {
//   const response = await fetch(url);
//   const data = await response.json()
//   console.log(handleFetch);
//   } catch (err) {
  //     console.error(err)
  //   }
  // }

  import React, { useState, useEffect } from 'react';
  import WeatherIndex from './weatherIndex';


  const APIkey = 'db81147a8b035b8d982970bd85456e4d'
  
  
  
  const Weather = (props) => {
    
    const lat = 39.970406
    const lon = -85.966848
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
    console.log(url)
    
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('click button for results');
    

    useEffect(() => {

      fetch(url)
      .then((res) => {
        return res.json()
      }) .then((data) => {
        console.log(data)
        setTemp(data.main.temp + `\xB0F`)
        setDescription(data.weather[0].description)
      });
      
    }, []);



    const [ogTemp, setOgTemp] = useState(temp+`\xB0F`);
    const [newTemp, setNewTemp] = useState(5/9*(temp - 32));

  let handleToggle = () => {
    console.log(ogTemp)
    console.log(newTemp)
    return (ogTemp === true ?
      setTemp(newTemp)
      : setTemp(ogTemp) )
  }



  return ( 
    <div>
    <h1>Hello from Weather</h1>
    <h2>Current location will go here</h2>
    <h3>Current Weather Conditions: {description}</h3>
    <h3>Current Temperature: {temp}</h3>
    <button onClick={handleToggle}>Toggle to change units goes here</button>
  </div>
   );
}


 
export default Weather;