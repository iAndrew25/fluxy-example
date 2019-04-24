import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {useStore} from '../common/store';

export default () => {
	let [value, setValue] = useState(''),
		[store, dispatch] = useStore(),
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