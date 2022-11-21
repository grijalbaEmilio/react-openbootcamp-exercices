import React, { Component } from "react";

import propTypes from "prop-types";

        
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 45,
    };
  }
  render() {
    return (
      <div>
        <h1> hello world {this.props.name} </h1>
        {this.state.age}
      </div>
    );
  }
}

Greeting.propType = {
  name: propTypes.string,
};

export default Greeting;
