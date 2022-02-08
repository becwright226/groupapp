/* 
! TO DO:
! API URL & APIKEY
! construct the fetch
*/



  import React, { useState, useEffect } from 'react';
  import WeatherIndex from './weatherIndex';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Card, CardTitle, CardText, Button} from 'reactstrap'

  const APIkey = 'db81147a8b035b8d982970bd85456e4d'
  
  
  
  const Weather = (props) => {
    
    const lat = 39.970406
    const lon = -85.966848
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
    console.log(url)
    
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('click button for results');
    const [location, setLocation] = useState('');
    

    useEffect(() => {

      fetch(url)
      .then((res) => {
        return res.json()
      }) .then((data) => {
        console.log(data)
        setTemp(data.main.temp )
        setDescription(data.weather[0].description)
        setLocation(data.name)
      });
      
    }, []);
    
    let celcius = (temp -32) * 5/9;
 
    const [isCurrentTemp, setIsCurrentTemp] = useState(true);

    let handleToggle = () => {
      setIsCurrentTemp(!isCurrentTemp)
    }


    return ( 

    <div className='mainDiv' style={{width: '50%'}}>
     <Card
      body
      inverse
      style={{
      backgroundColor: '#333',
      borderColor: '#333',
    }}
  >
      <CardTitle tag="h5">
      Current location: {location}
      </CardTitle>
      <CardText>
      Current Weather Conditions: {description}
      <hr />
      {isCurrentTemp === true ? (
        <h3>Current Temperature {`\xB0C`}:{Math.round(celcius)}</h3>
        ) : (
        <h3>Current Temperature{`\xB0F`}:{Math.round(temp)}</h3>
        )}
      </CardText>
      <Button onClick={handleToggle}>
        Click to change temperature units!
      </Button>
      </Card>
    </div>



    //     <div>
    //   <h1>Hello from Weather</h1>
    //   <h2>Current location: {location}</h2>
    //   <h3>Current Weather Conditions: {description}</h3>
    //   {/* <h3>Current Temperature{`\xB0F`}: {Math.round(temp)}</h3>
    // <h3>Current Temperature {`\xB0C`}: {Math.round(celcius)}</h3> */}
  
      // {isCurrentTemp === true ? (
      //   <h3>Current Temperature {`\xB0C`}:{Math.round(celcius)}</h3>
      //   ) : (
      //   <h3>Current Temperature{`\xB0F`}:{Math.round(temp)}</h3>
      //   )}

    //     <button onClick={handleToggle}>Click to change temperature unit!</button>
    //   </div>
      );
    }
    
      
      
      export default Weather;
      
      //*try 1 return (ogTemp === true ?
      //     setTemp(newTemp)
      //     : setTemp(ogTemp) )
      
      //*try 2
      // if (setTemp === temp+`\xB0F`) {
        //   setNewTemp = newTemp
        // } else {
          //   let setOgTemp = temp(+`\xB0F`)
          //   console.log(temp, 'OGGGGGGGGGG')
          // }
          
          //*try 3
          // if (temp === fahrenheit) {
            //   return celcius
            // } else {
              //   return fahrenheit
              // }
              //      
              
              
              // if(currentTemp = true) {
                //       return celcius
                //       } else {
                  //        return (fahrenheit)
                  //       }  
                  // console.log(handleToggle, 'TOGGLE BUTTON')
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  //     <div className="carousel-inner">
                  //     <div className="carousel-item active">
                  //     <h2>Current location: {location}</h2>
                  //     </div>
                  //     <div className="carousel-item">
                  //     <h3>Current Weather Conditions: {description}</h3>
                  //     </div>
                  //     <div className="carousel-item">
                  //     {isCurrentTemp === true ? (
                  //       <h3>Current Temperature {`\xB0C`}:{Math.round(celcius)}</h3>
                  //       ) : (
                  //         <h3>Current Temperature{`\xB0F`}:{Math.round(temp)}</h3>
                  //         )}
                  //     <button onClick={handleToggle}>Click to change temperature unit!</button>
                  //     </div>
                  //     </div>
                  //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  //     <span className="visually-hidden">Previous</span>
                  //     </button>
                  //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  //     <span className="visually-hidden">Next</span>
                  //     </button>
                  // </div>







