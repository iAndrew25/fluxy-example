import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {connect} from '../common/store';

const UIButton = ({btnValue, dispatch}) => {
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

const mstp = store => {
	return {
		btnValue: store.btnValue
	}
}

export default connect(mstp)(UIButton);