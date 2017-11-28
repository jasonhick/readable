import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaComments from 'react-icons/lib/fa/comments';
import Voter from '../voter';

const PostList = props => (
  <div className="flex-ns flex-wrap">

    {props.posts && props.posts.map(post => (
      <article key={post.id} className="w-33-l w-50-m h6 mb2 ph2 ph4-ns pb4">
        <h2>
          <Link
            to={`/${post.category}/${post.id}`}
            className="hover-title pv3 ph1 bg-near-black link f4 lh-2 white athelas"
          >{post.title}
          </Link>
        </h2>
        <p className="avenir f5 lh-copy avenir near-black measure">{post.body.substring(0, 250)}...</p>
        <span className="f5 black-50 i">Posted by {post.author}, {moment(post.timestamp).fromNow()}</span>
        <hr />

        {post.commentCount > 0
            ? <FaComments className="f2 black-70" />
          : <FaCommentO className="f2 black-10" />
          }

        <span className="ml2 black-50">{post.commentCount}</span>

        <Voter type="post" id={post.id} score={post.voteScore} />

      </article>
    ))}
  </div>

);

export default PostList;
