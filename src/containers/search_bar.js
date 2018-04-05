import React from 'react';
import { Component } from 'react';

// This will be a Controlled Component, thats means
// the data to be render is tight to the Component State
export default class SearchBar extends Component  {

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
  }

  render() {
    return (
      <form className="input-group">
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
}
