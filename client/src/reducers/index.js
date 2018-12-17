import { combineReducers } from "redux";
import STUDENTReducer from "./studentReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  library: STUDENTReducer,
  auth: authReducer,
  errors: errorReducer
});
