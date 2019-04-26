import React from 'react';

import {connect} from '../common/fluxy';

const UIButton = ({btnValue, dispatch}) => {
	console.log('UIButton');
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