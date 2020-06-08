import {createStore, combineReducers} from "redux";
import stateWs from './reducers';


const rootReducer = combineReducers({
    stateWs
});


const store = createStore(rootReducer);
export default store;
