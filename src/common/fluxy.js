import React, {createContext, useReducer, useContext, useMemo} from 'react';

const Context = createContext();

export const connect = mapStateToProps => UIComponent => ownProps => {
	let [store, dispatch] = useContext(Context),
		propsSubscribed = {...mapStateToProps(store), ...ownProps},
		watchProps = Object.values(propsSubscribed);

	return useMemo(() => <UIComponent {...propsSubscribed} dispatch={dispatch} />, watchProps);
}

export default ({children, rootReducer, initialStore}) => {
	return (
		<Context.Provider value={useReducer(rootReducer, initialStore)}>
			{children}
		</Context.Provider>
	);
}