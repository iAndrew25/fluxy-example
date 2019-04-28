import React, {useEffect} from 'react';
import {connect} from '../common/fluxy';

const Users = ({getUsers, users}) => {
	console.count('Users');

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="users">
			Online users:
			{users.map(({id, name}) => 
				<p key={id}>
					{name}
				</p>
			)}
		</div>
	);
}

const mapStateToProps = ({users}) => ({
	users
});

let getUsers = dispatch => async () => {
	let response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();

	dispatch({
		type: 'SET_USERS',
		payload: response
	});	
}

const mapDispatchToProps = dispatch => ({
	getUsers: () => getUsers(dispatch)(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);