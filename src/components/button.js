import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {useStore, connect} from '../common/store';

const btn = ({btnValue, dispatch}) => {
	console.log("btnValue", btnValue);
	// let [store, dispatch] = useStore(),
		let message = btnValue ? 'ON' : 'OFF',
		handleOnClick = () => {
			dispatch({type: 'toggle_button'});
		};

	return (
		<div>
			<button style={{padding: 10, backgroundColor: 'red'}} onClick={handleOnClick}>{message}</button>
		</div>
	);
};

export default connect(['btnValue'])(btn);