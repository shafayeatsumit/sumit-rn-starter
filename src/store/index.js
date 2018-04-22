import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import appReducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, appReducer);
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
