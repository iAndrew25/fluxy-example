import postsReducer from './reducers/posts-reducer';

export default ({posts} = {}, action = {}) => ({
	posts: postsReducer(posts, action)
});