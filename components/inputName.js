import React, { PropTypes } from 'react';

const inputNameComponent = React.createClass({
  handleChange () {
    this.props.handleClick(this.refs.theInput.value);
  },
  render(){
    return (
      <div>
  			<input className="form-control" type='text' ref="theInput"/>
	  		<button className='btn btn-default' onClick={this.handleChange}>sayHello!</button>
		  </div>
    )
  }
});

inputNameComponent.PropTypes = {
	handleClick: PropTypes.func.isRequired
};

export default inputNameComponent;