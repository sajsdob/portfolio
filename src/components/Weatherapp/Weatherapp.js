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



AOS.init({ duration: 800 });

const api = {
    key: "2bfdd7ade4a7269949294a30207a1c19",
    base: "api.openweathermap.org/data/2.5/",
    proxyUrl: 'https://cors-anywhere.herokuapp.com/'
}

function Weatherapp() {

    const [weatherinfo, setWeatherinfo] = useState({});
    const [link, setLink] = useState('');


    const searchCity = evt => {
        if (evt.key === "Enter") {
            fetch(api.proxyUrl + `${api.base}weather?q=${link}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeatherinfo(result);
                    setLink('');
                });
        }
    }

    const currentDate = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div data-aos="slide-down"  className='app'>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setLink(e.target.value)}
                        value={link}
                        onKeyPress={searchCity}
                    />
                </div>
                {(typeof weatherinfo.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weatherinfo.name}, {weatherinfo.sys.country}</div>
                            <div className="date">{currentDate(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weatherinfo.main.temp)}°c
            </div>
                            <div className="weather">{weatherinfo.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}

export default Weatherapp;