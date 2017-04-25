import React from 'react';

export class WeatherForm extends React.Component {
  onFormSubmit(event) {
    event.preventDefault();
    const location = this.locationRef.value;
    if (location.length > 0) {
      this.locationRef.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" placeholder="Search weather by city" ref={(input) => { this.locationRef = input; }} />
          <button className ="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}
