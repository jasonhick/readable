import React, { Component } from 'react';
import moment from 'moment';
import Voter from './voter';

class Comment extends Component {
  componentDidMount() {
    //
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="relative h4 mb3 ph4 pv2 br3 bg-white-30">
        <Voter commentId={comment.id} />
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
