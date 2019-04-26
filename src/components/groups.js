import React from 'react';
import {connect} from '../common/fluxy';

const Groups = ({groups, dispatch}) => {
	console.count('Groups');
	let handleGroupClick = id => () => {
		dispatch({
			type: 'TOGGLE_GROUP',
			payload: {
				groupId: id
			}
		})
	}

	return (
		<div className="groups">
			Groups:
			{groups.map(({id, name, joined}) => 
				<p key={id}>
					{name} - <span onClick={handleGroupClick(id)}>{joined ? 'leave' : 'join'}</span>
				</p>
			)}
		</div>
	);
}

const mapStateToProps = ({groups}) => ({
	groups
});

export default connect(mapStateToProps)(Groups);