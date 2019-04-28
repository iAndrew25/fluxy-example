export default (state, {type, payload} = {}) => {
	switch (type) {
		case 'SET_USERS':
			return payload;
		default:
			return state;
	}
};