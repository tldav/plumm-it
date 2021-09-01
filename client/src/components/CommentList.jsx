import React from 'react'
import CommentItem from "./CommentItem"

function CommentList({comments, originalPoster, thread}) {

  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.comment_id} thread={thread} comment={comment} originalPoster={originalPoster} />
      ))}
    </>
  )
}

export default CommentList
