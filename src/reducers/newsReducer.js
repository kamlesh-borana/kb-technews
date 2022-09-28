const newsReducer = (state, action) => {
  if (action.type === "GET_NEWS") {
    return {
      ...state,
      news: action.payload.hits,
      nbPages: action.payload.nbPages,
      isLoading: false,
    };
  } else if (action.type === "CHANGE_QUERY") {
    return {
      ...state,
      query: action.payload,
    };
  } else if (action.type === "CHANGE_PAGE") {
    return {
      ...state,
      page: action.payload,
    };
  } else if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "REMOVE_STORY") {
    return {
      ...state,
      news: state.news.filter((story) => story.objectID !== action.payload),
    };
  }
  return state;
};

export default newsReducer;
