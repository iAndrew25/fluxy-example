export default (state, {type, payload} = {}) => {
	switch (type) {
		case 'toggle_button':
			return !state;

		default:
			return state;
	}
};