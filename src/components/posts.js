import React from 'react';
import {connect} from '../common/fluxy';

import Post from './post';

const Posts = ({posts, username, dispatch}) => {
	console.count('Posts');
	return (
		<div className="posts">
			{posts.map(postData => <Post {...postData} username={username} dispatch={dispatch} />)}
		</div>
	);
}

const mapStateToProps = ({posts, user}) => ({
	username: user.username,
	posts
});

export default connect(mapStateToProps)(Posts);