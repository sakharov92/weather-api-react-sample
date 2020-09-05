import React from "react";
import './weather.css'


const Weather = (props) => {

    const sunriseTime = () => {
        let date = new Date(props.weather.weatherObject.sys.sunrise * 1000);
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }
    function sunsetTime() {
        let date = new Date(props.weather.weatherObject.sys.sunset * 1000);
        return date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }
    return (
        <section className="weather" >
            {
                props.weather.weatherObject &&
                <>
                    <p><span> Город:</span> {props.weather.weatherObject.name} {props.weather.weatherObject.sys.country}</p>
                    <p><span>Температура:</span> {Math.round(props.weather.weatherObject.main.temp) + "\u2103"}</p>
                    <p><span>Восход:</span> {sunriseTime()}</p>
                    <p><span>Закат:</span> {sunsetTime()}</p>
                </>
            }
            < p > {props.weather.error}</p>
        </section >
    )
}
export default Weather;




// temp = {this.state.temp}
// city = { this.state.city }
// country = { this.state.country }
// sunrise = { this.state.sunrise }
// sunset = { this.state.sunset }
// error = { this.state.error }