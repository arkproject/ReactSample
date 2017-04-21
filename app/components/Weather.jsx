import React from 'react';
import { WeatherForm } from 'WeatherForm';
import { WeatherMessage } from 'WeatherMessage';
const  openWeatherMap = require('openWeatherMap');

export class Weather extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading : false,
    };
  }
  handleSearch(location) {
    const that = this;
    this.setState ({isLoading : true})
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading : false,
      });
    }, function (errorMessage) {
      that.setState ({isLoading : false})
      alert(errorMessage);
    });
  }
  render() {
    const { temp, location, isLoading, } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather.....</h3>;
      } else if (temp && location) {
        return  <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    );
  }
}
