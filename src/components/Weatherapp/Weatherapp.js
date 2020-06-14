import React, { Component } from 'react';
import './Weatherapp.scss';

var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=2bfdd7ade4a7269949294a30207a1c19'


function Weatherapp() {
    
    function serachMovies () {
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then (weather => console.log(weather))
    }

    return <div id='/Weatherapp' className='Weatherapp'>
            <input type='text' className='search-city' placeholder='Enter City Name'></input>
            <button onClick={serachMovies}>SEARCH MOVIE</button>
           </div>
}


export default Weatherapp