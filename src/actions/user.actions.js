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

function login(form) {
  return (dispatch) => {
    dispatch(request(form));

    userService.login(form).then(
      (form) => {
        dispatch(success());
        // history.push("/login");
        const token = form.formData.accessToken;
        const id = form.formData.id;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userId", id);
        alert("login success");
        window.location.reload("/movies");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(form) {
    return { type: userConstants.LOGIN_REQUEST, form };
  }
  function success(form) {
    return { type: userConstants.LOGIN_SUCCESS, form };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
