/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import appReducers  from '../reducers';

// Redux Persist config
const persistConfig = {
	key: 'root',
	storage
};

console.log("===>",appReducers);
const persistedReducer = persistCombineReducers(persistConfig, appReducers);

const middleware = [thunk];

const configureStore = () => {
	const store = createStore(
		persistedReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		compose(applyMiddleware(...middleware)),
	);
	const persistor = persistStore(
		store,
		null,
		() => { store.getState(); },
	);
	return { persistor, store };
};
export default configureStore;