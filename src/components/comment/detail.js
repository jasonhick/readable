import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { apiDeleteComment } from '../../actions/comments';
import Voter from '../voter';
import Menu from '../menu';
import CommentForm from './form';

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
    const { comment, apiDeleteComment } = this.props;

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

      <div className="relative cf mb3 pt4 ph4 pb3 bg-animate hover-bg-white-60 br3 bg-white-30">
        <Menu
          cssClass="absolute top-1 right-1 h1 w2 tr pointer hide-child"
          handleToggleEdit={this.toggleEdit}
          handleOnDelete={() => apiDeleteComment(comment.id)}
        />
        <p className="mt0 avenir">{comment.body}</p>
        <p className="athelas silver i">Posted by {comment.author}, {moment(comment.timestamp).fromNow()}</p>
        <div className="cb mt4 pt3 bt b--black-10">
          <Voter type="comment" id={comment.id} score={comment.voteScore} />
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = { apiDeleteComment };

export default connect(null, mapDispatchToProps)(Comment);
