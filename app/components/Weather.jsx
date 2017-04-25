import React from 'react';
import { WeatherForm } from 'WeatherForm';
import { WeatherMessage } from 'WeatherMessage';
import { ErrorModal } from 'ErrorModal';
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
    this.setState ({
      isLoading : true,
      errore: undefined,
      location: undefined,
      temp: undefined
    })
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading : false,
      });
    },
    function (res) {
      that.setState ({
        isLoading : false,
        errore: res,
      });
    });
  }
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const location = params.get('location');

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.location.search);
    const location = params.get('location');

    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  render() {
    const { temp, location, isLoading, errore } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather.....</h3>;
      } else if (temp && location) {
        return  <WeatherMessage temp={temp} location={location} />;
      }
    }
    function renderError() {
      if (typeof errore === 'string') {
        return (
          <ErrorModal errore ={errore} />
        )
      }
    }

    return (
      <div>
        <h3 className="text-center page-title">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
