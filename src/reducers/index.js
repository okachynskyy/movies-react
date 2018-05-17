import { combineReducers } from "redux";
import SearchByReducer from "./search-by.reducer";

const rootReducer = combineReducers({
  searchBy: SearchByReducer
});

export default rootReducer;
