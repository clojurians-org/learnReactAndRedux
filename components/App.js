import React from 'react';
import InputName from '../containers/inputName';
import SayHello from '../containers/sayHello';
import AsyncHello from '../containers/asyncHello';
import GetReddit from '../containers/getReddit';
import ShowReddit from '../containers/showReddit';

export default () => (
	<div>
    	<div>同步:</div>
		<InputName />
    	<div>异步:</div>
    	<AsyncHello />
		<SayHello />
		<hr />
		<GetReddit />
		<ShowReddit />
	</div>
)