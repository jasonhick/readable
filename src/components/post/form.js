import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cuid from 'cuid';
import moment from 'moment';
import { apiAddPost, apiUpdatePost } from '../../actions/posts';

class PostForm extends Component {
  constructor(props) {
    super(props);
    const id = cuid();
    this.state = {
      id: props.post.id || id,
      timestamp: props.post.timestamp || Date.now(),
      author: props.post.author || '',
      title: props.post.title || '',
      body: props.post.body || '',
      category: props.post.category || '',
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
      title: '',
      body: '',
      category: '',
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
    const post = {
      ...this.state,
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
              maxLength="5000"
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
              checked={this.state.category === 'react'}
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
              checked={this.state.category === 'redux'}
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
              checked={this.state.category === 'udacity'}
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
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(apiAddPost(post)),
  updatePost: post => dispatch(apiUpdatePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
