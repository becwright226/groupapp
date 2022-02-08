import React, { useState, useEffect } from 'react';

import { Col, Row, Container } from 'reactstrap';
import EventDisplay from './EventDisplay';




const APIkey = 'rONC9qHJ2cvhiPBd2dcdoACdEU3ibUCF'

const EventFetch = (props) => {

const lat = 39.970406
const lon = -85.966848
const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&apikey=${APIkey}`

const [fetchEvents, setFetchEvents] = useState([]);
const [distance, setDistance] = useState('');
const [dates, setDates] = useState([]);
const [times, setTimes] = useState('');
const [maxPriceRange, setMaxPriceRange] = useState([]);
const [tickets, setTickets] = useState('');
const [promoters, setPromoters] = useState([]);



useEffect(() => {
    fetch(url)
    .then((res) => {
      return res.json()
    }) .then((data) => {
        console.log(data._embedded)//
      setFetchEvents(data._embedded.events)
      setDistance(data._embedded.events)
      setTimes(data._embedded.events)
      setDates(data._embedded.events)
    
    });
    
  }, []);

  const eventMapper = ()=> {
    return fetchEvents.map((event, index) => {
        return(
            <tr key={index}>
                <tr style={{color:"Danger"}}>Event: </tr>
                <br/>
                <br/>
                <br/>
                <th scope='row' style={{width: "30%"}}>{event.name}</th>
                <tr> Distance: </tr>
                <br/>
                <br/>
                <br/>
                <th scope='row' style={{width: "20%"}}>{event.distance} miles from Fishers</th>
                <tr> Date: </tr>
                <br/>
                <br/>
                <br/>
                <th scope='row' style={{width: "15%"}}>{event.dates.start.localDate}</th>
                <tr> Time: </tr>
                <br/>
                <br/>
                <br/>
                <th scope='row' style={{width: "12%"}}>{event.dates.start.localTime}</th>
            </tr>
        )
    }
    )
}

return ( 

        <Container
        striped
        style={{backgroundColor:"#999",
        height:"215%",
        border:'double 10px black',
        color:'white',
        padding:"20px",
        width:"60%",
        borderRadius:"5%",
        float:"right"}}>
            <h3>Events near Fishers</h3>
         <Row 
         style={{padding:"5px", border:'ridge 10px black', borderRadius:"2%", color:'HighlightText'}}>
         <Col style={{padding:"50px"}}>
        {eventMapper()}
        </Col>
        </Row>
        </Container>
   
        
        );
}
    export default EventFetch;

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
    //ONLOAD ///Kept running fetch
    /*fetch(url)
    .then((res) => {
        return res.json();
    }) .then((data) => {
        console.log(data._embedded.events[11].dates.start.dateTime) 
        setEvents(data._embedded.events[7].name)
        setDistance(data._embedded.events[7].distance)
    })*/
    /*const fetchEvent = (props) => {
        fetch(url)
        .then((res) => {
        res.json()
        })
        .then((data) =>
        setEvents(data._embedded.events))
    }*/