import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  render() {
    return (
      <table className="table table-hove">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Presure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeatherRow) }
          </tbody>

      </table>
    );
  }

  renderWeatherRow(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(item => item.main.temp);
    const pressure = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key= { name }>
        <td><GoogleMap lon={ lon } lat={ lat }/></td>
        <td><Chart data={ temps } color="orange" unit="K" /></td>
        <td><Chart data={ pressure } color="green" unit="hPa" /></td>
        <td><Chart data={ humidity } color="black" unit="%" /></td>
      </tr>
    );
  }
}


// ES6 sintax
// { weather } will pull up the variable 'weather' into a constant
//  with the same name. ===> const weather = state.weather
function mapStateToProps( { weather } ) {
  return {
    // ES6 this is equal to weather: weather
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
