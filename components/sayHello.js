import React, { PropTypes } from 'react';
import style from '../scss/bg.scss';

const sayHelloComponent = ({name}) => {
	return (
		<h1 className={style.className}>hello, {name}</h1>
	)
}

sayHelloComponent.PropTypes = {
	name: PropTypes.string.isRequired
}

export default sayHelloComponent;