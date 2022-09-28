import React from "react";
import { useNewsContext } from "../context/NewsContext";

const Story = (props) => {
  const { title, author, url, num_comments, objectID } = props.story;
  const {removeStory} = useNewsContext()
  return (
    title && (
      <div className="card">
        <h2>{title}</h2>
        <p>
          By <span>{author}</span> | <span>{num_comments}</span> comments
        </p>
        <div className="card-button">
          <a href={url} target="_blank" rel="noreferrer">
            Read More
          </a>
          <button onClick={()=>{removeStory(objectID)}}>Remove</button>
        </div>
      </div>
    )
  );
};

export default Story;
