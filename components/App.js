import React from 'react';
import { Link } from 'react-router';
import InputName from '../containers/inputName';
import SayHello from '../containers/sayHello';
import AsyncHello from '../containers/asyncHello';
import GetReddit from '../containers/getReddit';
import ShowReddit from '../containers/showReddit';

export default () => (
	<div className="container">
		<div className="form-inline">
			<div className="form-group">
				<label>同步:</label>
				<InputName />
			</div>
			<div className="col-md-offset-1 form-group">
				<label>异步:</label>
				<AsyncHello />
			</div>
		</div>
		<SayHello />
    	
    	
		<hr />
		<GetReddit />
		<ShowReddit />
		<hr />
		<Link to={'/users'}>测试路由</Link>
	</div>
)