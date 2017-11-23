import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { apiDeleteComment } from '../../actions/comments';
import Voter from './voter';
import CommentForm from '../comment/form';
import Menu from '../comment/menu';

class Comment extends Component {
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
    const { comment, deleteComment } = this.props;

    if (isEditing) {
      return (
        <CommentForm
          comment={comment}
          isEditing
          toggleEdit={this.toggleEdit}
        />
      );
    }

    return (

      <div className="relative cf mb3 pa4 br3 bg-white-30">

        <Menu
          toggleEdit={this.toggleEdit}
          deleteComment={() => deleteComment(comment.id)}
        />

        <p className="mt0">{comment.body}</p>

        <p className="silver i">Posted by {comment.author}, {moment(comment.timestamp).fromNow()}</p>

        <div className="cb mt4 pt3 bt b--black-10">
          <Voter commentId={comment.id} />
          <div className="fl mt2 mr1 pa2 br3 f5 ba b--black-20">Votes: {comment.voteScore}</div>
        </div>

      </div>

    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(apiDeleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
