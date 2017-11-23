import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import { getAllPosts } from '../../actions/posts';
import PostList from './list';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getAllPosts();
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
      .map(post => state.posts[post])
      .sort(sortBy('-voteScore')),
  };
};

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
});

PostsContainer.propTypes = {
  posts: PropTypes.shape.isRequired,
  getAllPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostsContainer));
