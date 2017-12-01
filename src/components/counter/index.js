import React from 'react';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaComments from 'react-icons/lib/fa/comments';

const CommentCount = ({ count }) => (
  <div className="fl">
    {count > 0
        ? <FaComments className="f2 black-70" />
        : <FaCommentO className="f2 black-10" />
    }
    <span className="ml2 black-50">{count}</span>
  </div>
);

export default CommentCount;
