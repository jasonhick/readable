import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { apiDeletePost } from '../../actions/posts';
import CommentCount from '../counter';
import Voter from '../voter';
import Menu from '../menu';
import PostForm from './form';
import CommentsContainer from '../comments/container';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { isEditing } = this.state;
    const { post, deletePost } = this.props;

    if (isEditing) {
      return (
        <PostForm
          post={post}
          isEditing
          toggleEdit={this.toggleEdit}
        />
      );
    }

    return (
      <article key={post.id} className="relative mw6 mb2 pb4">
        <h2>
          <span className="title pv2 ph1 bg-near-black f1 lh-2 white athelas">
            {post.title}
          </span>
        </h2>
        <span className="f4 i silver">
            Posted by {post.author}, {moment(post.timestamp).fromNow()}
        </span>
        <Menu
          cssClass="fr relative h1 w2 tr pointer hide-child"
          handleToggleEdit={this.toggleEdit}
          handleOnDelete={() => deletePost(post.id)}
        />
        <p className="avenir f5 avenir lh-copy near-black measure">
          {post.body}
        </p>
        <CommentCount count={post.commentCount} />
        <Voter type="post" id={post.id} score={post.voteScore} />
        <h2 className="cb mt6 pt3 bt b--black-10 f2 i athelas silver">Comments:</h2>
        <CommentsContainer />
      </article>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(apiDeletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
