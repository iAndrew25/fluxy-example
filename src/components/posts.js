import React from 'react';
import {connect} from '../common/fluxy';

import Post from './post';

const Posts = ({posts, dispatch}) => {
	return (
		<div className="posts">
			{posts.map(postData => <Post {...postData} dispatch={dispatch} />)}
		</div>
	);
}

const mapStateToProps = ({posts}) => ({
	posts
});

export default connect(mapStateToProps)(Posts);