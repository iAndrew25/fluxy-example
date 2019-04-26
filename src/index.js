import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import StoreProvider from './common/fluxy';
import rootReducer from './common/root-reducer';
import initialStore from './common/store';

import Item from './components/item';
import List from './components/list';
import Button from './components/button';

const App = () => {
	let [val, setVal] = useState('da');

	return (
		<StoreProvider initialStore={initialStore} rootReducer={rootReducer}>
			<Item />
			<List />
			<Button leng={val}/>
			<button onClick={() => setVal('nu')}>click - {val}</button>
		</StoreProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));