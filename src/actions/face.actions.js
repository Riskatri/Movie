import { faceConstants } from "../constants/face.constants";
import { faceService } from "../services/user.service";
import { alertActions } from "./";

export const faceActions = {
  facedetection,
};

function facedetection() {
  return (dispatch) => {
    dispatch(request());

    faceService.facedetection().then(() => {
      dispatch(success());
      // history.push("/login");
      dispatch(alertActions.success("face detection"));
      alert("done");
      // window.location.reload("/");
    });
  };

  function request() {
    return { type: faceConstants.FACE_REQUEST };
  }
  function success() {
    return { type: faceConstants.FACE_SUCCESS };
  }
}
