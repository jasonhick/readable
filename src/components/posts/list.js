import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import FaComment from 'react-icons/lib/fa/comment';

const PostList = props => (

  <div className="flex flex-wrap">
    {props.posts && props.posts.map(post => (
      <article key={post.id} className="w5 mr5 mb2 pb4">
        <h2>
          <Link
            to={`/${post.category}/${post.id}`}
            className="pv3 ph1 bg-near-black link f4 lh-2 white athelas hover-bg-gold bg-animate"
          >{post.title}
          </Link>
        </h2>
        <span className="f7 i">Posted by {post.author} {moment(post.timestamp).fromNow()}</span>
        <p className="avenir f5 avenir near-black measure">{post.body}</p>

        <div>
          <div className="fl">Vote: {post.voteScore}</div>
          <div className="fr mr3">
            <FaComment />{post.commentCount}
          </div>
        </div>


      </article>
  ))}

  </div>

);

export default PostList;
