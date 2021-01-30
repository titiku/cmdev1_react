import { combineReducers } from "redux";
import registerReducer from "./register.reducer";
import loginReducer from "./login.reducer";
import appReducer from "./app.reducer";

export default combineReducers({ registerReducer, loginReducer, appReducer });
