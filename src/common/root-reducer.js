import postsReducer from './reducers/posts-reducer';
import groupsReducer from './reducers/groups-reducer';
import usersReducer from './reducers/users-reducer';

export default ({posts, groups, user, users} = {}, action = {}) => ({
	posts: postsReducer(posts, action),
	groups: groupsReducer(groups, action),
	users: usersReducer(users, action),
	user,
});