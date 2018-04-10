import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// This will be a Controlled Component, thats means
// the data on an HTML form is tight to the Component State
// This Component will be a Container
class SearchBar extends Component  {

  constructor(props) {
      super(props);

      this.state = {term: ''};

      // In JS this represent the current Component context
      // when we pass the function onInputChange() as call back
      // then the consxt of 'this'is missed, because the callbak is
      // executed in other context.
      // This function bind() baiscally wrapp the original function with
      // the instance 'this' inside this and assigne is to the oroginal
      // function
      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input
          placeholder="Get a five-day forecaste in your facorit city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button types="submit"
                  className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState( {term: event.target.value} );
  }

  onSubmitForm(event) {
    // prevent the automatic Form submition
    event.preventDefault();

    // call the Acction Creator available on Props
    this.props.fetchWeather(this.state.term);
    this.setState( {term: ''} );
  }

}


// Hook up the ActionCreator into this Conntainer
// This make sure that the Action flows by the Middleware and Reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
