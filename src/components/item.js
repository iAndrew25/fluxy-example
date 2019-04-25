import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {connect} from '../common/store';

const UIItem = ({dispatch}) => {
	console.log('UIItem');
	let [value, setValue] = useState(''),
		handleOnClick = () => {
			dispatch({type: 'add_item', payload: {id: Math.random(), value, done: false}});
			setValue('');
		};

	return (
		<div>
			<input type="text" value={value} onChange={e => setValue(e.target.value)}/>
			<button onClick={handleOnClick}>click</button>
		</div>
	);
};

export default connect(() => ({}))(UIItem);