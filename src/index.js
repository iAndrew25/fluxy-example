import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import {StateProvider} from './common/store';

import Item from './components/item';
import List from './components/list';

const App = () => {
	return (
		<StateProvider>
			<Item />
			<List />
		</StateProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));