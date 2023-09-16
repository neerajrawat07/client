import React, { useState } from 'react'

import "./comments.css";
import { useSelector } from 'react-redux';
function DisplayComments({
  cId,commentBody,userCommented
}) {
    
  const [Edit, setEdit] = useState(false);
  const [commentBdy, setCommentBdy] = useState("");
  const [cmtId, setcmtId] = useState("");
  const [commentText, setcommentText] = useState("");

  const handleEdit=(ctId,ctBdy)=>{
    setEdit(true);
    setCommentBdy(ctBdy);
  }

  return (
    <>
    {Edit ? (
      <>
        <form
          className="comments_sub_form_comments"
        //   onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            onChange={(e) =>setCommentBdy(e.target.value)}
            placeholder="Edit comment..."
            value={commentBody}
            className="comment_ibox"
          />
          <input
            type="submit"
            value="Change"
            className="comment_add_btn_comments"
          />
        </form>
      </>
    ) : (
      <p className="comment_body">{commentBody}</p>
    )}
    <p className="usercommented">
      - {userCommented} commented 
    </p>
    { (
      <p className="EditDel_DisplayCommendt">
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i>Delete</i>
      </p>
    )}
  </>
);
}

export default DisplayComments;