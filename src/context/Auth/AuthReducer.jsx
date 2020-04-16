import { LOGIN, SET_ALERT, LOG_OUT } from "./../Types";
export default (state, action) => {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    }
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    }

    case SET_ALERT: {
      return {
        ...state,
        isAuth: false,
        alert: {
          alert: "Wrong Credentials",
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};
