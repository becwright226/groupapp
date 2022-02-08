
import './App.css';
import WeatherIndex from './Weather/weatherIndex';
import React, { useState } from 'react';


function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className="App">
      <button onClick={getLocation} style={{borderRadius: '10px', width: '150px', backgroundColor: '#999' }} >Get Location</button>
      <h1>Your current coordinates:</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <WeatherIndex lat={lat} lng={lng}/>
    </div>
  );
}

export default App;
