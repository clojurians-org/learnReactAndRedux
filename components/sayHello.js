import React, { PropTypes } from 'react';

const sayHelloComponent = ({name}) => {
	return (
		<h1>hello, {name}</h1>
	)
}

sayHelloComponent.PropTypes = {
	name: PropTypes.string.isRequired
}

export default sayHelloComponent;