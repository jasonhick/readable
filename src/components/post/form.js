import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cuid from 'cuid';
import moment from 'moment';
import { apiAddPost, apiUpdatePost } from '../../actions/posts';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: this.props.post.id || cuid(),
        timestamp: this.props.post.timestamp || Date.now(),
        author: this.props.post.author || '',
        title: this.props.post.title || '',
        body: this.props.post.body || '',
        category: this.props.post.category || '',
      },
      isEditing: props.isEditing || false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    this.setState({
      post: {},
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = {
      ...this.state.post,
    };

    if (this.state.isEditing) {
      this.props.updatePost(post);
      this.props.toggleEdit();
    } else {
      this.props.addPost(post);
      this.clearForm();
    }
  }

  render() {
    const { isEditing } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="relative cf mw7 mb3 pa4 pt0 br3 bg-white-30">

          <h1 className="mb4 pb3 athelas f2 i bb b--black-10">Add a new post:</h1>

          {isEditing ? (
            <p className="silver i">Posted by {this.state.author}, {moment(this.state.timestamp).fromNow()}</p>
            ) : (
              <div>
                <label htmlFor="author" className="avenir f5 b">Author:
                  <input
                    id="author"
                    name="author"
                    type="text"
                    className="w-100 pa3 mt3 mb4 bg-white-90 bn"
                    onChange={this.handleChange}
                    value={this.state.author}
                    placeholder="Please enter your name"
                    maxLength="30"
                    required
                  />
                </label>
              </div>

            )}

          <label htmlFor="title" className="avenir f5 b">Title:
            <input
              id="title"
              name="title"
              type="text"
              className="w-100 pa3 mt3 mb4 bg-white-90 bn"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="Enter the title of the post"
              maxLength="100"
              required
            />
          </label>

          <label htmlFor="body" className="avenir f5 b">Post:
            <textarea
              id="body"
              name="body"
              className="w-100 h5 mt3 mb4 pa3 bg-white-90 bn"
              onChange={this.handleChange}
              value={this.state.body}
              placeholder="Type your post here"
              maxLength="1000"
              required
            />
          </label>

          <label
            htmlFor="react"
            className="container avenir"
          >React
            <input
              id="react"
              type="radio"
              name="category"
              value="react"
              required
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>
          <label
            htmlFor="redux"
            className="container avenir"
          >Redux
            <input
              id="redux"
              type="radio"
              name="category"
              value="redux"
              required
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>
          <label
            htmlFor="udacity"
            className="container avenir"
          >Udacity
            <input
              id="udacity"
              type="radio"
              name="category"
              value="udacity"
              required
              onChange={this.handleChange}
            />
            <span className="checkmark" />
          </label>

          <hr className="cb w-100 mt5 mb3 bt-0 b--black-10" />
          <button type="submit" className="fr pa2 br3 f5 ba b--black-20">Save post</button>

        </div>
      </form>
    );
  }
}

PostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    timestamp: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(apiAddPost(post)),
  updatePost: post => dispatch(apiUpdatePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
