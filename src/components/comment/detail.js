import React, { Component } from 'react';
import moment from 'moment';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class Comment extends Component {
  componentDidMount() {
    //
  }

  render() {
    const { comment } = this.props;

    return (
      <div key={comment.id} className="relative h4 mb3 ph4 pv2 br3 bg-white-30">
        <div className="absolute top-1 right-1">
          <button>
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
    );
  }
}

export default Comment;
