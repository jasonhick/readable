import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
    return React.createElement(Loading);
  }

  renderView() {
    const { posts } = this.props;
    return (
      posts && posts.map(post => (
        <PostDetail key={post.id} post={post} isEditing="false" />
      ))
    );
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

const mapDispatchToProps = { getPostById };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostContainer));
