import React from 'react'
import Comment from './Comment';

const CommentList = ({comment}) => {

  return (
    <div>

     {comment.map((item) => 
          <div>
            <Comment comment={item} />
            {/* {item.replies.map((item)=>
                <CommentList comment={item}/>
            )} */}
            <CommentList  comment={item.replies}/>
            </div>
       
        )}

    </div>
  )
}

export default CommentList