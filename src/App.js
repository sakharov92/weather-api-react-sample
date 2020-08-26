import React from 'react';
import './App.css';
import Info from './components/Info'
import Form from './components/Form'
import Weather from './components/Weather'
import background from "./img/hotpng.com.png"

const WEATHER_API_KEY = "1bd36a71f443f3091bdf084b3715ffcc"

class App extends React.Component {

  state = {
    weatherObject: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
      const dataJson = await api_url.json();
      this.setState({
        weatherObject: dataJson,
        error: undefined
      })
    } else {
      this.setState({
        error: "Введите название города"
      })
    }
  }
  render() {
    return (
      <div className="App" >
        <img src={background} alt="background"></img>
        <Info />
        <Form weatherFunction={this.getWeather} />
        <Weather
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;
