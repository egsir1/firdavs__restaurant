import React, { useEffect, useState } from "react";
import "./Comments.css";
//import { createComment as createCommentApi } from "./api";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  const [pushFeedback, setPushFeedback] = useState([]);

  /*  const addComment = (data) => {
    console.log("addComment", data);
    createCommentApi(data.name, data.text, data.date).then((prevcomment) => {
      setPushFeedback([prevcomment, ...data]);
      console.log(data, prevcomment);
    });
  }; */
  const pushData = (data) => {
    fetch("https://bro-app-e3b89-default-rtdb.firebaseio.com/feedback.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    /*    .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(11, responseData);
        setPushFeedback((prevFeedback) => [...prevFeedback,{
                id:responseData.name, ...pushFeedback
        }]);
      }); */
    console.log(data);
  };

  useEffect(() => {
    fetch("https://bro-app-e3b89-default-rtdb.firebaseio.com/feedback.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const feedbackData = [];

        for (const key in responseData) {
          feedbackData.push({
            id: key,
            name: responseData[key].name,
            text: responseData[key].text,
            date: responseData[key].date,
          });
        }
        setPushFeedback(feedbackData);
        console.log(feedbackData);
      });
  }, []);

  return (
    <section className="comments">
      <h1 className="comments-title headtext__cormorant">
        Customer Assessment
      </h1>

      <div className="comments-container">
        {pushFeedback.map((rootComment) => (
          <Comment key={rootComment.id} comment={rootComment} />
        ))}
      </div>

      <CommentForm
        submitLabel="post"
        pushData={pushData}

        /*   handleSubmit={addComment} */
      />
    </section>
  );
};

export default Comments;
