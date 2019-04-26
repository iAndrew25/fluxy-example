import postsReducer from './reducers/posts-reducer';
import groupsReducer from './reducers/groups-reducer';

export default ({posts, groups} = {}, action = {}) => ({
	posts: postsReducer(posts, action),
	groups: groupsReducer(groups, action)
});