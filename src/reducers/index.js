// import { combineReducers } from "redux";
// import movieReducers from "../reducers/movieReducers";

// export default combineReducers({
//   name: movieReducers,
//   username: movieReducers,
//   email: movieReducers,
//   password: movieReducers,
// });

import { combineReducers } from "redux";

import { registration } from "./registration.reducers";
import { alert } from "./alert.reducers";

const rootReducer = combineReducers({
  registration,
  alert,
});

export default rootReducer;
