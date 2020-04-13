import { userConstants } from "../constants/user.constans";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}

export function login(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { isLogin: true };
    case userConstants.LOGIN_SUCCESS:
      return {};
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}
