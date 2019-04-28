export default (state, {type, payload = {}} = {}) => {
	let {groupId} = payload;

	switch (type) {
		case 'TOGGLE_GROUP':
			return state.map(group => group.id === groupId ? {
				...group,
				joined: !group.joined
			} : group);

		default:
			return state;
	}
};