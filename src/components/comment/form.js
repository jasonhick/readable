import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cuid from 'cuid';
import moment from 'moment';
import { apiAddComment, apiUpdateComment } from '../../actions/comments';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    const id = cuid();
    this.state = {
      parentId: props.match.params.postid,
      id: props.comment.id || id,
      author: props.comment.author || '',
      body: props.comment.body || '',
      isEditing: props.isEditing || false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    const id = cuid();
    this.setState({
      id,
      timestamp: Date.now(),
      author: '',
      body: '',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = {
      ...this.state,
    };

    if (this.state.isEditing) {
      this.props.updateComment(comment);
      this.props.toggleEdit();
    } else {
      this.props.addComment(comment);
      this.clearForm();
    }
  }

  render() {
    const { isEditing } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="relative cf mb3 pa4 br3 bg-white-30">

          <textarea
            id="body"
            name="body"
            className="w-100 h4 mb3 pa3 bg-white-90 bn"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Type your comment here"
          />

          {isEditing ? (
            <p className="silver i">Posted by {this.state.author}, {moment(this.state.timestamp).fromNow()}</p>
            ) : (
              <p><input
                id="author"
                name="author"
                type="text"
                className="w-100 pa3 mb3 bg-white-90 bn"
                onChange={this.handleChange}
                value={this.state.author}
                placeholder="Author"
              />
              </p>
            )}

          <button type="submit" className="mt2 mr1 pa2 br3 f5 ba b--black-20">Save</button>

        </div>
      </form>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(apiAddComment(comment)),
  updateComment: comment => dispatch(apiUpdateComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentForm));
