import { createStore, combineReducers } from 'redux'
import myReducer from './Reducers/myReducer'
import myOtherReducer from './Reducers/myOtherReducer'


const rootReducer = combineReducers({
    myReducer: myReducer,
    myOtherReducer: myOtherReducer
});

const store = createStore(rootReducer);

export default store;

