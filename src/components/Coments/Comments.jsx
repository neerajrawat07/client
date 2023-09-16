import React from "react";
import { useState } from "react";
import "./comments.css";
import DisplayComments from "./DisplayComments";
 
function Comments(){
    const [commentText, setcommentText] = useState("")
    const handleOnSUbmit=(e)=>{
        e.preventDefault();
    }
 
    const commentsList = [
      {
        _id:"1",
        commentBody: "hello",
        userCommented: "abc",
      },
      {
        _id:"2",
        commentBody: "hiii",
        userCommented: "xyz",
      },
    ];

  return (
    <>
      <form className="comments_sub_form_comments"
       onSubmit={handleOnSUbmit}
      >
        
        <input
          type="text"
          onChange={e=>setcommentText(e.target.value)}
          placeholder="add comment..."
          
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comment_container">
      {commentsList
          
          .map((m) => {
            return (
              <DisplayComments
                commentBody={m.commentBody}
                userCommented={m.userCommented}
                
              />
            );
          })}
         
      </div>
    </>
  );
}

export default Comments;