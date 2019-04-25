import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {connect} from '../common/store';

const UIButton = ({btnValue, dispatch}) => {
	console.log("UIButton");
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

export default connect(['btnValue'])(UIButton);