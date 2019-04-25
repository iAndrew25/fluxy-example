import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import StateProvider, {rootReducer, store} from './common/store';

import Item from './components/item';
import List from './components/list';
import Button from './components/button';

const App = () => {
	return (
		<StateProvider value={useReducer(rootReducer, store)}>
			<Item />
			<List />
			<Button />
		</StateProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));