import { userConstants } from "../constants/user.constans";
import { userService } from "../services/user.service";
import { alertActions } from "./";

export const userActions = {
  register,
};

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        // history.push("/login");
        dispatch(alertActions.success("Registration successful"));
        alert("register success");
        window.location.reload("/login");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
