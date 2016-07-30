import React, { PropTypes } from 'react';

const redditComponent = React.createClass({
  handleClick() {
    this.props.getJson();
  },
  render(){
    return (
		  <button className='btn btn-default' onClick={this.handleClick}>看看react的新闻</button>
    )
  }
});

redditComponent.PropTypes = {
	getJson: PropTypes.func.isRequired
}

export default redditComponent;