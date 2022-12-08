import React from "react";
import "./Comment.css";
import { images } from "../../constants";

const Comment = ({ comment }) => {
  const createdAt = new Date(comment.date).toLocaleDateString();
  return (
    <div className="commentMain">
      <div className="comment">
        <div className="comment-image-container">
          <img src={images.userIcon} alt="userIcon" />
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.name}</div>
            <div className="comment-date">{createdAt}</div>
          </div>
        </div>
      </div>
      <div className="comment-text">{comment.text}</div>
    </div>
  );
};

export default Comment;
