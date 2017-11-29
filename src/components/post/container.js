import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPostById } from '../../actions/posts';
import PostDetail from './detail';
import Loading from '../loading';

class PostContainer extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { postid } = this.props.match.params;
    this.props.getPostById(postid);
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  renderLoading() {
    return (
      <Loading />
    );
  }

  renderView() {
    const { posts } = this.props;
    return React.createElement(PostDetail, { posts });
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }
    return this.renderView();
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
