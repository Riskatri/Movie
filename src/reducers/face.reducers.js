import { faceConstants } from "../constants/face.constants";

export default function facereducers(state = {}, action) {
  switch (action.type) {
    case faceConstants.FACE_REQUEST:
      //   console.log("reducer");
      return {
        facedatection: true,
      };
    case faceConstants.FACE_SUCCESS:
      return {};
    default:
      return state;
  }
}
