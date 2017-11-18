import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostDetail from './detail';

const PostContainer = ({ posts }) => (
  React.createElement(PostDetail, { posts })
);

const mapStateToProps = (state, { match }) => {
  const { postid } = match.params;
  return {
    posts: Object.keys(state.posts)
      .filter(post => (state.posts[post].id === postid))
      .map(post => state.posts[post]),
  };
};

export default connect(mapStateToProps)(withRouter(PostContainer));
