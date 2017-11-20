import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostById } from '../../actions/posts';
import PostDetail from './detail';

class PostContainer extends Component {
  componentDidMount() {
    const { postid } = this.props.match.params;
    this.props.getPostById(postid);
  }

  render() {
    const { posts } = this.props;
    return React.createElement(PostDetail, { posts });
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts)
    .map(post => state.posts[post]),
});

const mapDispatchToProps = dispatch => ({
  getPostById: id => dispatch(getPostById(id)),
});

PostContainer.propTypes = {
  match: PropTypes.string.isRequired,
  posts: PropTypes.shape.isRequired,
  getPostById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContainer));
