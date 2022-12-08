import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./CommentForm.css";

const CommentForm = ({ handleSubmit, submitLabel, pushData }) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const data = { name: name, text: text, date: new Date().toISOString() };

  const onSubmit = (event) => {
    event.preventDefault();
    pushData(data);
    setIsSubmitted(true);
    console.log(text);
    setText("");
    setName("");
  };
  const isTextareaDisabled = text.length === 0;
  const formData = (
    <form className="feedbackForm" onSubmit={onSubmit}>
      <div className="comment-form-title">Leave your feedback</div>
      <textarea
        className="comment-form-textarea"
        value={text}
        placeholder="Add a Comment..."
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <div className="action">
        <input
          type="text"
          className="comment-form-input"
          value={name}
          required
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel}
        </button>
      </div>
    </form>
  );

  return (
    <Fragment>
      {!isSubmitted && formData}
      {isSubmitted && (
        <section className="submitfeedback">
          <h3 className=" soon comment-form-title">
            Your feedback is updated soon...
          </h3>
          <div className="feedbackCon">
            <Link to="/" className="custom__button">
              Confirm
            </Link>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default CommentForm;
