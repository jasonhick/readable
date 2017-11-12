import moment from 'moment';

import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaComment from 'react-icons/lib/fa/comment';
import FaCommentO from 'react-icons/lib/fa/comment-o';
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
          <article key={post.id} className="relative w-90 w-50-ns mb3 center avenir br3">

            <div className="ph3 pv1 ba br3 br--top b--black-20 bg-white-50">
              <span className="fl f7 moon-gray">Posted by {post.author}</span>
              <span className="fr f7 moon-gray">{moment(post.timestamp).fromNow()}</span>
              <h2 className="cb f4 tc">{post.title}</h2>
              <hr className="mb3 mw5 center black-10" />
              <p className="mb1 f6 tc black-70">
                {post.body}
              </p>
            </div>

            <div className="cf ph3 pv2 bl br bb br3 br--bottom b--black-20 bg-white-50">

              <FaThumbsOUp className="fl" />
              <FaThumbsODown className="fl" />
              <FaComment className="fr" />
              <FaCommentO className="fr o-20" />
            </div>

          </article>
        ))
      );
    }
}

export default Posts;
