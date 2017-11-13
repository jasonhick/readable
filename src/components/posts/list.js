import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostList = props => (

  props.posts && props.posts.map(post => (
    <article key={post.id} className="mb5 pb4 w-50-ns center bb b--black-10">
      <h2>
        <Link
          to={`/post/${post.id}`}
          className="pv3 ph1 bg-near-black link f4 white athelas hover-bg-gold bg-animate"
        >{post.title}
        </Link>
      </h2>
      <span className="f7 i">Posted by {post.author} {moment(post.timestamp).fromNow()}</span>
      <p className="avenir f5 avenir near-black measure">{post.body}</p>
    </article>
  ))
);

export default PostList;
