import React from 'react';
import { connect } from 'react-redux';
import { apiDeleteComment } from '../../actions/comments';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const CommentActions = props => (
  <div className="absolute top-1 right-1">
    <FaEllipsisH className="black-50" />
    <button
      type="button"
      onClick={() => props.deleteComment(props.commentId)}
    >Delete
    </button>
  </div>

);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(apiDeleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentActions);
