import { MOVIE_REDUCERS } from "./index";
import axios from "axios";

export function registerActions() {
  return function (dispatch) {
    axios
      .post("http://127.0.0.1:4001/signup")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: MOVIE_REDUCERS,
          payload: res.data,
        })
      );
    // .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     alert("register successfully");
    //     window.location.reload();
    // });
  };
}
