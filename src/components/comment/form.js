import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cuid from 'cuid';
import { apiAddComment } from '../../actions/comments';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentId: props.match.params.postid,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      id: cuid(),
      timestamp: Date.now(),
      ...this.state,
    };
    this.props.addComment(comment);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="relative h-auto mh9 mb3 ph4 pv2 br3 bg-white-30">
          <h4 className="f5 tn">Add a new comment</h4>

          <label htmlFor="author" className="db">Author:
            <input
              id="author"
              name="author"
              type="text"
              className="db h2 pl2 mb3 w-80 bg-white-30 bn b--light-gray"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="body" className="db">Comment:
            <textarea
              id="body"
              name="body"
              className="db h4 w-80"
              onChange={this.handleChange}
            />
          </label>

          <div className="absolute bottom-1 right-1">
            <button type="submit" className="mt2 mr1 pa2 br3 f5 ba b--black-20">Save</button>
          </div>
        </div>

      </form>
    );
  }
}

const mapStateToProps = () => (
  {}
);

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(apiAddComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentForm));
