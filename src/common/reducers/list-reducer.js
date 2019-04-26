export default (state, {type, payload} = {}) => {
	switch (type) {
		case 'add_item':
			return [
				...state,
				payload
			];

		case 'toggle_done':
			return state.map(item => item.id === payload.id ? {
				...item,
				done: !item.done
			} : item);

		default:
			return state;
	}
};