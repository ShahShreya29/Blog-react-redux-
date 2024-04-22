import { combineReducers } from "redux";
import AuthReducer from "../AuthReducer";
import BlogReducer from "../BlogReducer";

const rootReducer = combineReducers({
  AuthReducer,
  BlogReducer,
});

export default rootReducer;
