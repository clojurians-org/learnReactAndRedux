import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {hello} from '../actions';

let AddHello = ({ dispatch }) => {
  let input
	return (
		<div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(hello(input.value))
        input.value = ''
      }}>
  			<input type="text" ref={node=>{input=node}}/>
		    <button type="submit">
          hello
        </button>
      </form>
		</div>
	)
}

AddHello = connect()(AddHello);

export default AddHello;