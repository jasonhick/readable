import React from 'react';
import moment from 'moment';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

const CommentList = ({ comments }) => {
  const handleVoteClick = function () {
    console.log('clicked');
  };

  return (
    <div className="avenir mw6">
      <h3 className="f3 bb b--black-20">Comments:</h3>
      {comments && comments.map(comment => (
        <div key={comment.id} className="relative h4 mb3 ph4 pv2 br3 bg-white-30">
          <div className="absolute top-1 right-1">
            <button onClick={handleVoteClick()}>
              <FaThumbsOUp className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate" />
            </button>

            <FaThumbsODown className="pa2 br3 f4 ba b--black-20 hover-bg-gold bg-animate" />
          </div>
          <p>{comment.body}</p>
          <p className="silver i">{comment.author}, {moment(comment.timestamp).fromNow()}</p>
          <div className="absolute bottom-1 right-1">
            <div className="mt2 mr1 pa2 br3 f5 ba b--black-20">
              Votes: {comment.voteScore}
            </div>
          </div>
        </div>
        ))}
      <div className="relative h-auto mh9 mb3 ph4 pv2 br3 bg-white-30">
        <h4 className="f5 tn">Add a new comment</h4>
        Author:
        <br /><input type="text" className="h2 pl2 mb3 w-80 bg-white-30 bn b--light-gray" />
        <br />Comment:
        <br /><textarea type="text" className="h4 w-80 cb" />
        <div className="absolute bottom-1 right-1">
          <div className="mt2 mr1 pa2 br3 f5 ba b--black-20">
              Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
