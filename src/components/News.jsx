import React, { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import Story from "./Story";

const News = () => {
  const { fetchNews, api, news, query, isLoading, page } = useNewsContext();
  useEffect(() => {
    fetchNews(`${api}${query}&page=${page}`);
  }, [query, page]);

  return isLoading ? (
    <h1>Loading.....</h1>
  ) : (
    <div className="stories">
      {news.map((story) => (
        <Story key={story.objectID} story={story} />
      ))}
    </div>
  );
};

export default News;
