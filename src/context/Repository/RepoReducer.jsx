import { GET_REPOS } from "./../Types";
export default (state, action) => {
  switch (action.type) {
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
