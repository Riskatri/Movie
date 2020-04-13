import { userConstants } from "../constants/user.constans";
import { userService } from "../services/user.service";
import { alertActions } from "./";

export const userActions = {
  register,
  login,
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

function login(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.login(user).then(
      (user) => {
        dispatch(success());
        // history.push("/login");
        const token = user.formData.accessToken;
        localStorage.setItem("jwtToken", token);
        alert("login success");
        window.location.reload("/movies");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
