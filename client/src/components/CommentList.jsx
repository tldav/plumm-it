import React from 'react'
import CommentItem from "./CommentItem"

function CommentList({comments}) {

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.comment_id} comment={comment} />
      ))}
    </>
  )
}

export default CommentList
