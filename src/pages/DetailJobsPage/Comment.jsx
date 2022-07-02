import React, { useEffect, useState } from "react";
import { http } from "../../util/setting";
import "../../scss/_Comment.scss";

export default function Comment({ jobId }) {
  const [comment, setComment] = useState([]);
  const [text, setText] = useState();
  useEffect(async () => {
    try {
      const result = await http.get(`/api/comments/by-job/${jobId}`);
      console.log("comment", result);
      if (result.data) setComment(result.data);
    } catch (err) {
      console.log(err);
    }
  }, [jobId]);

  const enterComment = async (event) => {
    const { keyCode } = event;
    console.log(keyCode);
    if (keyCode === 13)
        try {
          const result = await http.post('/api/comments', {content: text, job: jobId});
          
          console.log("comment", result);
        } catch (err) {
          console.log(err);
        }
  };

  const changeCommentInput = (event) => {
    const comment = event.target.value;
    setText(comment);
  };

  const renderComment = () => {
    return comment.map((Comment, index) => {
      return (
        <div key={index}>
          <p>{Comment.user.name}</p>
          <p>{Comment.content}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderComment()}</div>
      <input
        placeholder="Comment..."
        type="text"
        onChange={changeCommentInput}
        onKeyUp={enterComment}
      />
    </div>
  );
}
