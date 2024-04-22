import { createStore } from "redux";
import rootReducer from "./Components/combine";

const store = createStore(
    rootReducer
);

export default store;       
