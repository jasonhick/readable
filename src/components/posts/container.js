import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostList from './list';

class PostsContainer extends Component {
  componentDidMount() {
    // do stuff
  }

  render() {
    const { posts } = this.props;
    return React.createElement(PostList, { posts });
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.category;
  return {
    posts: Object.keys(state.posts)
      .filter(post => (filter === 'all'
        ? state.posts[post] :
        state.posts[post].category === filter))
      .map(post => state.posts[post]),
  };
};

export default connect(mapStateToProps)(withRouter(PostsContainer));
