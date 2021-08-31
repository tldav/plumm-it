import React from 'react'
import CommentItem from "./CommentItem"

function CommentList({comments, originalPoster}) {

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.comment_id} comment={comment} originalPoster={originalPoster} />
      ))}
    </>
  )
}

export default CommentList
