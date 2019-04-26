import listReducer from './reducers/list-reducer';
import btnReducer from './reducers/btn-reducer';

export default ({list, btnValue} = {}, action = {}) => ({
	list: listReducer(list, action),
	btnValue: btnReducer(btnValue, action)
});