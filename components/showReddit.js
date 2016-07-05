import React, { PropTypes } from 'react';

const showRedditComponent = ({jsonData}) => {
	if(!jsonData){
		return null
	}
	return (
		<div>
			<ul>
				{
					jsonData.map((post, i)=>
						<li key={i}>{post.data.title} </li>
					)
				}
			</ul>
		</div>
	)
}

showRedditComponent.PropTypes = {
	jsonData: PropTypes.array.isRequired
}

export default showRedditComponent;