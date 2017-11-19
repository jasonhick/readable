import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getCommentsByPost,
} from '../../actions/comments';
import CommentDetail from '../comment/detail';

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
          <CommentDetail key={comment.id} comment={comment} />
        ))}

        <div className="relative h-auto mh9 mb3 ph4 pv2 br3 bg-white-30">
          <h4 className="f5 tn">Add a new comment</h4>
          Author:
          <br /><input type="text" className="h2 pl2 mb3 w-80 bg-white-30 bn b--light-gray" />
          <br />Comment:
          <br /><textarea type="text" className="h4 w-80 cb" />
          <div className="absolute bottom-1 right-1">
            <div className="mt2 mr1 pa2 br3 f5 ba b--black-20">Save</div>
          </div>
        </div>
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
