export default (state, {type, payload = {}} = {}) => {
	let {postId, comment} = payload;

	switch (type) {
		case 'ADD_COMMENT':
			return state.map(post => post.id === postId ? {
				...post,
				comments: [...post.comments, comment]			
			} : post);

		case 'INCREASE_LIKES':
			return state.map(post => post.id === postId ? {
				...post,
				likes: post.likes + 1
			} : post);

		default:
			return state;
	}
};