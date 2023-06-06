import {legacy_createStore} from 'redux';

import rootReducer from './reducer';

function configureStore(initialState) {
  return legacy_createStore(rootReducer, initialState);
}

export default configureStore;
