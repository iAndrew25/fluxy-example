import React, {createContext, useContext, useMemo} from 'react';

const Context = createContext();

export let store = {
	list: [{
		id: 1,
		value: 'Stuff',
		done: false
	}, {
		id: 2,
		value: 'Stuff2',
		done: true
	}],
	btnValue: true
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

const btnReducer = (state, {type, payload} = {}) => {
	switch (type) {
		case 'toggle_button':
			return !state;

		default:
			return state;
	}
};

export let rootReducer = ({list, btnValue}, action) => ({
	list: listReducer(list, action),
	btnValue: btnReducer(btnValue, action)
});

export const connect = mapStateToProps => UIComponent => ownProps => {
	let [store, dispatch] = useContext(Context),
		propsSubscribed = {...mapStateToProps(store), ...ownProps},
		watchProps = Object.values(propsSubscribed);

	return useMemo(() => <UIComponent {...propsSubscribed} {...ownProps} dispatch={dispatch} />, watchProps);
}

export default Context.Provider;