// import React, { useState } from 'react';
// import './Weatherapp.scss';

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=2bfdd7ade4a7269949294a30207a1c19'


// const  Weatherapp = () => {
    
//     function searchWeather () {
//         fetch(proxyUrl + targetUrl)
//         .then(res => res.json())
//         .then (weather => console.log(weather.weather))
//     }

//     return <div id='/Weatherapp' className='Weatherapp'>
//             <input type='text' className='search-city' placeholder='Enter City Name'></input>
//             <button onClick={searchWeather}>SEARCH</button>
//            </div>
// }


// export default Weatherapp



import React, { useState } from 'react';
import './Weatherapp.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';



// AOS.init({ duration: 800 });

// const api = {
//     key: "6557810176c36fac5f0db536711a6c52",
//     base: "https://api.openweathermap.org/data/2.5/",
//     proxyUrl: 'http://cors-anywhere.herokuapp.com/'
// }

function Weatherapp() {

    // const [weatherinfo, setWeatherinfo] = useState({});
    // const [link, setLink] = useState('');


    // const searchCity = evt => {
    //     if (evt.key === "Enter") {
    //         fetch(`${api.base}weather?q=${link}&units=metric&APPID=${api.key}`)
    //             .then(res => res.json())
    //             .then(result => {
    //                 setWeatherinfo(result);
    //                 setLink('');
    //             });
    //     }
    // }

    // const currentDate = (d) => {
    //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //     let day = days[d.getDay()];
    //     let date = d.getDate();
    //     let month = months[d.getMonth()];
    //     let year = d.getFullYear();

    //     return `${day} ${date} ${month} ${year}`
    // }

    return (
        <div data-aos="slide-down"  className='app'>
fkalfmawlkfaw

        </div>
    );
}

export default Weatherapp;