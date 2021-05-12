import { createStore,combineReducers  } from "redux";
import entriesReducer from '../Reducers/entries.reducers'
const confirgStore= ()=>{
return createStore(combineReducers({
    entries:entriesReducer,
}));
};
export default confirgStore;