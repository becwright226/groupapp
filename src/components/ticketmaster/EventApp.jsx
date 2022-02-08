import React, { useState, useEffect } from 'react';
import { CardLink, Col, NavLink, Table } from 'reactstrap';




const APIkey = 'rONC9qHJ2cvhiPBd2dcdoACdEU3ibUCF'

const EventFetch = (props) => {

const lat = 39.970406
const lon = -85.966848
const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&apikey=${APIkey}`

const [fetchEvents, setFetchEvents] = useState('');
const [distance, setDistance] = useState('');
const [dates, setDates] = useState('');
const [times, setTimes] = useState('');
const [maxPriceRange, setMaxPriceRange] = useState([]);
const [info, setInfo] = useState('');
const [tickets, setTickets] = useState('');
const [promoters, setPromoters] = useState([]);

useEffect(() => {

    fetch(url)
    .then((res) => {
      return res.json()
    }) .then((data) => {
        console.log(data._embedded.events[1])
      setFetchEvents(data._embedded.events[1].name)
      setDistance(data._embedded.events[1].distance)
      setDates(data._embedded.events[1].dates.start.localDate)
      setTimes(data._embedded.events[1].dates.start.localTime)
      setMaxPriceRange(data._embedded.events[1].priceRanges[0].max)
      setTickets(data._embedded.events[1].url)
      setPromoters(data._embedded.events[1].promoter.name)
    });
    
  }, []);

///Attempt 6
return ( 
        <Table> 
         
         <Col>
        <li>{fetchEvents}</li>
        </Col>
      
       
        <Col>
        <li>{distance}</li>
        </Col>
        
        
        <Col>
        <li>{dates}</li>
        </Col>
        
        
        <Col>
        <li>{times}</li>
        </Col>
     
        <Col>
        <li>{maxPriceRange}</li>
        </Col>

        <Col>
        <li>{promoters}</li>
        </Col>

        <Col>
        <li>{tickets}</li>
        </Col>
    </Table>
        
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