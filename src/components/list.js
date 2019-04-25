import React from 'react';
import ReactDOM from 'react-dom';

import {useStore} from '../common/store';

export default () => {
	let [store, dispatch] = useStore();
console.log('list');
	return (
		<div>
			{store.list.map(({id, value, done}) => <p key={id} onClick={() => dispatch({type: 'toggle_done', payload: {id}})} className={done && 'done'}>{value}</p>)}
		</div>
	);
};