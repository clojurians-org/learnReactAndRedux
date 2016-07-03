import React, { PropTypes } from 'react';

const ShowHello = ({ hellos }) => (
	<div>
		<li>第{hellos.num}次,{hellos.text}</li>
	</div>
)

export default ShowHello