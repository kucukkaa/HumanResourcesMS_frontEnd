import { USER_SING_IN, USER_SING_OUT } from "../actions/userActions";
import { userStatus } from "../initialValues/userStatus";

const initialState = {
  userStatus: userStatus,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_SING_IN:
      if (state.userStatus.length === 0) {
        return {
          userStatus: [payload],
        };
      } else {
        return { ...state };
      }

    case USER_SING_OUT:
      return {
        userStatus: [],
      };

    default:
      return state;
  }
}
