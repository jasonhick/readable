import React, { Component } from 'react';
import * as readAPI from '../../utils/api';
import PostList from './list';

class PostContainer extends Component {
    state = {
      posts: [],
    }

    componentDidMount() {
      readAPI.getPosts().then((posts) => {
        this.setState({ posts });
      });
    }

    render() {
      return React.createElement(PostList, { posts: this.state.posts });
    }
}

export default PostContainer;
