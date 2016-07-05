import React, { PropTypes } from 'react';

const redditComponent = React.createClass({
  handleClick: function() {
    this.props.getJson();
  },
  render(){
    return (
      <div>
  		<button onClick={this.handleClick}>看看react的新闻</button>
	  </div>
    )
  }
});

redditComponent.PropTypes = {
	getJson: PropTypes.func.isRequired
}

export default redditComponent;