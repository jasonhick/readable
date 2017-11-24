import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import moment from 'moment';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.post.id || cuid(),
      author: props.post.author || '',
      body: props.post.body || '',
      category: props.post.category || '',
      isEditing: props.isEditing || false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    this.setState({
      id: '',
      author: '',
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
      timestamp: Date.now(),
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
        <div className="relative cf mb3 pa4 br3 bg-white-30">

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

          <textarea
            id="body"
            name="body"
            className="w-100 h5 mb3 pa3 bg-white-90 bn"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Type your comment here"
          />

          <label htmlFor="react" className="container avenir">React
            <input id="react" type="radio" name="category" value="react" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
          <label htmlFor="redux" className="container avenir">Redux
            <input id="redux" type="radio" name="category" value="redux" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>
          <label htmlFor="udacity" className="container avenir">Udacity
            <input id="udacity" type="radio" name="category" value="udacity" onChange={this.handleChange} />
            <span className="checkmark" />
          </label>

          <hr className="cb w-100 mt5 mb3 bt-0 b--black-10" />
          <button type="submit" className="fr pa2 br3 f5 ba b--black-20">Save post</button>

        </div>
      </form>
    );
  }
}

export default connect()(PostForm);
