import React, { PropTypes } from 'react';

const sayHelloComponent = ({name}) => {
	return (
		<div>
			<p>hello, {name}</p>
		</div>
	)
}

sayHelloComponent.PropTypes = {
	name: PropTypes.string.isRequired
}

export default sayHelloComponent;