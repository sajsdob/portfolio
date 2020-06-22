import React, { useState, useEffect } from 'react';
import './Weatherapp.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import location from '../../assets/location.png'



AOS.init({ duration: 800 });

const api = {
    key: "3dbbfca50d3674cc4510970916791fb0",
    base: "https://api.openweathermap.org/data/2.5/",
    proxyUrl: 'http://cors-anywhere.herokuapp.com/'
}

function Weatherapp() {

    const [weatherinfo, setWeatherinfo] = useState({});
    const [link, setLink] = useState('');
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

  

    const searchCity = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${link}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeatherinfo(result);
                    setLink('');
                });
            document.activeElement.blur();
        }
    }
    const localWeather = () => {
        if ('geolocation' in navigator) {
            setLoading(true)
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                fetch(`https://eu1.locationiq.com/v1/reverse.php?key=c327a65f799172&lat=${lat}&lon=${lon}&format=json`)
                    .then(res => res.json())
                    .then(result => {
                        setCity(result.address.city)
                        return result.address.city
                    })
                    .then(city => {
                        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
                            .then(res => res.json())
                            .then(result => {
                                setLoading(false)
                                setWeatherinfo(result);
                            });
                        document.activeElement.blur();
                    })
            })
        }
        else {
            alert('Your browser does not support geolocation!')
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
        <div data-aos="slide-down" className='app'>
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Enter City Name"
                        onChange={e => setLink(e.target.value)}
                        value={link}
                        onKeyPress={searchCity}
                    />
                    <img onClick={localWeather} src={location} />
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
                {loading ? (
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                ) : ('')}
            </main>
        </div>
    );
}

export default Weatherapp;



