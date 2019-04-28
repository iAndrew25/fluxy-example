import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import StoreProvider from './common/fluxy';
import rootReducer from './common/root-reducer';
import initialStore from './common/store';

import Posts from './components/posts';
import Users from './components/users';
import Groups from './components/groups';
import Profile from './components/profile';

const App = () => {
	return (
		<StoreProvider initialStore={initialStore} rootReducer={rootReducer}>
			<div className="main">
				<Profile />
				<div className="content">
					<Groups />
					<Posts />
					<Users />
				</div>
			</div>
		</StoreProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));