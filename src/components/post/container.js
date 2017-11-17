import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostDetail from './detail';

class PostContainer extends Component {
  componentDidMount() {
    // do stuff
  }

  render() {
    const { post } = this.props;
    return React.createElement(PostDetail, { post });
  }
}

const mapStateToProps = (state, props) => {
  const filter = props.category;
  return {
    posts: Object.keys(state.posts)
      .filter(post => (filter === 'all'
        ? state.posts[post] :
        state.posts[post].category === props.category))
      .map(post => state.posts[post]),
  };
};

export default connect(mapStateToProps)(withRouter(PostContainer));
