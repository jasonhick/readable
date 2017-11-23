import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cuid from 'cuid';
import moment from 'moment';
import {
  apiAddComment,
  apiUpdateComment,
} from '../../actions/comments';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: props.match.params.postid,
      id: props.comment.id || cuid(),
      author: props.comment.author || '',
      body: props.comment.body || '',
      isEditing: props.isEditing || false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    this.setState({
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
      timestamp: Date.now(),
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


          <label htmlFor="body" className="db">Comment:
            <textarea
              id="body"
              name="body"
              className="db h4 w-80"
              onChange={this.handleChange}
              value={this.state.body}
            />
          </label>

          {isEditing ? (
            <p className="silver i">Posted by {this.state.author}, {moment(this.state.timestamp).fromNow()}</p>
            ) : (
              <label htmlFor="author" className="db">Author:
                <input
                  id="author"
                  name="author"
                  type="text"
                  className="db h2 pl2 mb3 w-80 bg-white-30 bn b--light-gray"
                  onChange={this.handleChange}
                  value={this.state.author}
                />
              </label>
            )}

          <div className="absolute bottom-1 right-1">
            <button type="submit" className="mt2 mr1 pa2 br3 f5 ba b--black-20">Save</button>
          </div>

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
