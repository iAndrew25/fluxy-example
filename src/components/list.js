import React from 'react';

import {connect} from '../common/fluxy';

const UIList = ({list, dispatch}) => {
	console.log('UIList');
	return (
		<div>
			{list.map(({id, value, done}) => <p key={id} onClick={() => dispatch({type: 'toggle_done', payload: {id}})} className={done && 'done'}>{value}</p>)}
		</div>
	);
};

export default connect(store => ({list: store.list}))(UIList);