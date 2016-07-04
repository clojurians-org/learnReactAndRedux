import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {asyncHello} from '../actions';

let AddHello = ({ dispatch }) => {
  let input
	return (
		<div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(asyncHello(input.value))
        input.value = ''
      }}>
  			<input type="text" ref={node=>{input=node}}/>
		    <button type="submit">
          asyncHello
        </button>
      </form>
		</div>
	)
}

AddHello = connect()(AddHello);

export default AddHello;