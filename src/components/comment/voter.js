import React from 'react';
import { connect } from 'react-redux';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { apiVoteComment } from '../../actions/comments';

const Voter = props => (
  <div className="absolute top-1 right-1">
    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.upVote(props.commentId)}
    ><FaThumbsOUp />
    </button>
    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.downVote(props.commentId)}
    ><FaThumbsODown />
    </button>
  </div>
);

const mapStateToProps = () => (
  {}
);

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch(apiVoteComment(id, 'upVote')),
  downVote: id => dispatch(apiVoteComment(id, 'downVote')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Voter);
