import React, { PropTypes } from 'react';

const inputNameComponent = React.createClass({
  handleChange: function() {
    this.props.handleClick(this.refs.theInput.value);
  },
  render(){
    return (
      <div>
  			<input type='text' ref="theInput"/>
	  		<button onClick={this.handleChange}>sayHello!</button>
		  </div>
    )
  }
});

inputNameComponent.PropTypes = {
	handleClick: PropTypes.func.isRequired
};

export default inputNameComponent;