import { createContext, useContext, useReducer } from "react";
import newsReducer from "../reducers/newsReducer";

const NewsContext = createContext();

const NewsProvider = (props) => {
  const initialState = {
    news: [],
    query: "",
    page: 0,
    nbPages: 0,
    isLoading: true,
  };
  const api = "https://hn.algolia.com/api/v1/search?query=";
  const [state, dispatch] = useReducer(newsReducer, initialState);
  const fetchNews = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const res = await fetch(url);
      const parsedData = await res.json();
      dispatch({
        type: "GET_NEWS",
        payload: parsedData,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const changeQuery = (query) => {
    dispatch({
      type: "CHANGE_QUERY",
      payload: query,
    });
  };
  const changePage = (page) => {
    dispatch({
      type: "CHANGE_PAGE",
      payload: page,
    });
  };
  const removeStory = (id) => {
    dispatch({
      type: "REMOVE_STORY",
      payload: id,
    });
  };
  return (
    <NewsContext.Provider
      value={{ ...state, api, fetchNews, changeQuery, changePage, removeStory }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContext, NewsProvider, useNewsContext };
