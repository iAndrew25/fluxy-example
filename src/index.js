import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import StoreProvider from './common/fluxy';
import rootReducer from './common/root-reducer';
import initialStore from './common/store';

import Posts from './components/posts';
import Groups from './components/groups';

const App = () => {
	return (
		<StoreProvider initialStore={initialStore} rootReducer={rootReducer}>
			<div className="main">
				<Groups />
				<Posts />
			</div>
		</StoreProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));