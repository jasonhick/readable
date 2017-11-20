import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCommentsByPost } from '../../actions/comments';
import CommentDetail from '../comment/detail';
import CommentForm from '../comment/form';

class CommentsContainer extends Component {
  componentDidMount() {
    const { postid } = this.props.match.params;
    this.props.getCommentsByPost(postid);
  }

  render() {
    const { comments } = this.props;

    return (
      <div className="avenir mw6">
        <h3 className="f3 bb b--black-20">Comments:</h3>
        {comments && comments.map(comment => (
          <CommentDetail key={comment.id} comment={comment} isEditing="false" />
        ))}
        <CommentForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: Object.keys(state.comments)
    .map(comment => state.comments[comment]),
});

const mapDispatchToProps = dispatch => ({
  getCommentsByPost: post => dispatch(getCommentsByPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentsContainer));
