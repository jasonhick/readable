import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaComment from 'react-icons/lib/fa/comment';
import FaComments from 'react-icons/lib/fa/comments';

import Voter from '../voter';

const PostList = props => (

  <div className="flex-ns flex-wrap">
    {props.posts && props.posts.map(post => (
      <article key={post.id} className="w5-l mr5-l mb2 pb4">
        <h2>
          <Link
            to={`/${post.category}/${post.id}`}
            className="title pv3 ph1 bg-near-black link f4 lh-2 white athelas"
          >{post.title}
          </Link>
        </h2>
        <span className="f7 i">Posted by {post.author} {moment(post.timestamp).fromNow()}</span>
        <p className="avenir f5 avenir near-black measure">{post.body}</p>

        <hr />

        {post.commentCount > 0
          ? <FaComments className="f2 black-70" />
        : <FaCommentO className="f2 black-10" />
        }

        <Voter type="post" id={post.id} score={post.voteScore} />

      </article>
  ))}

  </div>

);

export default PostList;
