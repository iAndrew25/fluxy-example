import React, {createContext, useReducer, useContext, useMemo} from 'react';

const isFunction = fn => typeof fn === 'function';

const Context = createContext();

export const connect = (mapStateToProps, mapDispatchToProps) => UIComponent => ownProps => {
	let [store, dispatch] = useContext(Context),
		subscribedProps = isFunction(mapStateToProps) ? mapStateToProps(store) : {},
		dispatchProps = isFunction(mapDispatchToProps) ? mapDispatchToProps(dispatch) : {},
		componentProps = {...subscribedProps, ...ownProps, ...dispatchProps},
		watchProps = Object.values(componentProps);

	return useMemo(() => <UIComponent {...componentProps} dispatch={dispatch} />, watchProps);
}

export default ({children, rootReducer, initialStore}) => (
	<Context.Provider value={useReducer(rootReducer, initialStore)}>
		{children}
	</Context.Provider>
);