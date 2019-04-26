import React, {useState} from 'react';

export default ({imageUrl, likes, comments, dispatch}) => {
	console.count('Post');
	let [value, setValue] = useState(''),
		handleOnChange = event => {
			setValue(event.target.value);
		},
		handleOnSubmit = event => {
			event.preventDefault();
			dispatch({
				type: 'ADD_COMMENT', 
				payload: {
					postId: 1,
					comment: {
						id: Math.random(),
						text: value,
						name: 'Bob'
					}
				}
			});
			setValue('');
		},
		handleLikes = () => {
			dispatch({
				type: 'INCREASE_LIKES',
				payload: {
					postId: 1
				}
			});
		}

	return (
		<div className="post">
			<img src={imageUrl} className="post-image" />
			<div className="likes" onClick={handleLikes}>
				{likes} Likes
			</div>
			<div className="comments">
				{comments.map(({id, name, text}) => 
					<p key={id} className="comment">
						<span className="author-name">
							{name}
						</span> {text}
					</p>
				)}
			</div>
			<form onSubmit={handleOnSubmit} className="add-comment">
				<input type="text" value={value} onChange={handleOnChange} name="dah" />
			</form>
		</div>
	);
}