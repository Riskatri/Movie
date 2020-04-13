// import { combineReducers } from "redux";
// import movieReducers from "../reducers/movieReducers";

// export default combineReducers({
//   name: movieReducers,
//   username: movieReducers,
//   email: movieReducers,
//   password: movieReducers,
// });

import { combineReducers } from "redux";
import facereducers from "./face.reducers";
import { registration, login } from "./registration.reducers";
import { alert } from "./alert.reducers";

const rootReducer = combineReducers({
  registration,
  alert,
  facereducers,
  login,
});

export default rootReducer;
