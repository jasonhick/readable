import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as ReadableAPI from '../../utils/api';
import Comment from '../comment/detail';

class CommentsContainer extends Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    const { postid } = this.props.match.params;
    ReadableAPI.fetchCommentsByParentId(postid)
      .then(comments => this.setState({ comments }));
  }

  render() {
    const { comments } = this.state;

    return (

      <div className="avenir mw6">
        <h3 className="f3 bb b--black-20">Comments:</h3>

        {comments && comments.map(comment => (
          <Comment comment={comment} />
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

export default withRouter(CommentsContainer);
