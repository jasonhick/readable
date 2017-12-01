import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import sortBy from 'sort-by';
import { getAllPosts, sortPosts } from '../../actions/posts';
import PostList from './list';
import Sorter from '../sorter';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  componentWillReceiveProps() {
    this.setState({ loading: false });
  }

  handleSortChange(event) {
    this.props.sortPosts(event.target.value);
  }

  renderLoading() {
    return (
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div id="object" />
          </div>
        </div>
      </div>
    );
  }

  renderView() {
    const { posts } = this.props;
    return (
      <div>
        <Sorter sortBy="-timestamp" handleSortChange={this.handleSortChange} />
        <PostList posts={posts} />
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }
    return this.renderView();
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
      .sort(sortBy(state.sorting.orderBy)),
  };
};

const mapDispatchToProps = { getAllPosts, sortPosts };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostsContainer));
