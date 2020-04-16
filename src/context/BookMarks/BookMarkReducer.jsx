import { ADD_BOOKMARK, REMOVE_BOOKMARK, GET_BOOKMARKS } from "./../Types";
export default (state, action) => {
  switch (action.type) {
    case GET_BOOKMARKS: {
      return {
        ...state,
        bookmarks: action.payload,
        loading: false,
      };
    }
    case ADD_BOOKMARK: {
      return {
        ...state,
        bookmarks: action.payload,
      };
    }

    case REMOVE_BOOKMARK: {
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bm) => bm.id !== action.payload),
      };
    }
    default:
      return {
        ...state,
      };
  }
};
