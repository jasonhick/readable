import moment from 'moment';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaComment from 'react-icons/lib/fa/comment';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import * as readAPI from '../../utils/api';

class Posts extends Component {
    state = {
      posts: [],
    }

    componentDidMount() {
      readAPI.getPosts().then((posts) => {
        this.setState({ posts });
      });
    }

    render() {
      const { posts } = this.state;

      return (
        posts && posts.map(post => (
          <article key={post.id} className="mb5 pb4 w-50-ns center bb b--black-10">

            <h2>
              <Link
                to={`/post/${post.id}`}
                className="pv3 ph1 bg-near-black link f4 white athelas hover-bg-gold bg-animate"
              >{post.title}
              </Link>
            </h2>
            <span className="f7 i">
              Posted by {post.author} {moment(post.timestamp).fromNow()}
            </span>

            <p className="avenir f5 avenir near-black measure">
              {post.body}
            </p>

          </article>
        ))
      );
    }
}

export default Posts;
