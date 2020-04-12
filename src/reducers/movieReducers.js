import { MOVIE_REDUCERS } from "../actions/index";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVIE_REDUCERS:
      console.log("test");
      return {
        ...state,
        name: action.payload,
        username: action.payload,
        email: action.payload,
        password: action.payload,
        redirect: true,
        submit: true,
      };
    default:
      return state;
  }
}
