import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from "./actionType";
// import { initialState } from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case GET_USERS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
