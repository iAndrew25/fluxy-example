import React, {createContext, useContext, useReducer} from 'react';

const Context = createContext();

let store = {
	list: [{
		id: 1,
		value: 'Stuff',
		done: false
	}, {
		id: 2,
		value: 'Stuff2',
		done: true
	}]
};

const listReducer = (state, {type, payload} = {}) => {
	switch (type) {
		case 'add_item':
			return [
				...state,
				payload
			];

		case 'toggle_done':
			return state.map(item => item.id === payload.id ? {
				...item,
				done: !item.done
			} : item);

		default:
			return state;
	}
};

let rootReducer = ({list}, action) => ({
	list: listReducer(list, action)
});

export const StateProvider = ({children}) => (
	<Context.Provider value={useReducer(rootReducer, store)}>
		{children}
	</Context.Provider>
);

export const useStore = () => useContext(Context);