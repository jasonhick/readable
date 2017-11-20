import React from 'react';
import moment from 'moment';
import Voter from './voter';
import CommentActions from './actions';

const Comment = ({ comment, isEditing }) => (

  <div className="relative cf mb3 pa4 br3 bg-white-30 glow">

    <CommentActions commentId={comment.id} />

    {isEditing === true ? (
      <div>
        <label htmlFor="author" className="db">Author:
        <input
          id="author"
          name="author"
          type="text"
          className="db h2 pl2 mb3 w-80 bg-white-30 bn b--light-gray"
          value={comment.author}
        />
        </label>
        <label htmlFor="body" className="db">Comment:
        <textarea
          id="body"
          name="body"
          className="db h4 w-80"
          value={comment.body}
        />
        </label>
      </div>
    ) : (
      <div>
        <p className="mt0">{comment.body}</p>
        <p className="silver i">
          Posted by {comment.author}, {moment(comment.timestamp).fromNow()}
        </p>
      </div>
    )
  }

    <div className="cb mt4 pt3 bt b--black-10">
      <Voter commentId={comment.id} />
      <div className="fl">
        <div className="mt2 mr1 pa2 br3 f5 ba b--black-20">
            Votes: {comment.voteScore}
        </div>
      </div>
    </div>

  </div>
);

export default Comment;
