const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // return axios.get(requestUrl).then(function (res) {
    //   debugger;
    //   if (res.data.cod && res.data.message) {
    //     throw new Error(res.message);
    //   } else {
    //     return res.data.main.temp;
    //   }
    // }, function (res) {
    //   throw new Error(res.message);
    // });
    return axios.get(requestUrl).then(res => {
        if (res.data.cod === 200){
            return JSON.stringify(res.data.main.temp);//.data.main.temp;
        }
        throw res.data.cod;
    }, res => {
        throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
    });
  }
}
