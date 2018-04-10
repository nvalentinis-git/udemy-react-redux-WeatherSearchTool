import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  render() {
    return (
      <table className="table table-hove">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Presure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>

      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key= { name }>
        <td>
          { name }
        </td>
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
