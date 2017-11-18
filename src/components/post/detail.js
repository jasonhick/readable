import React from 'react';
import moment from 'moment';
import CommentsContainer from '../comments/container';

const PostDetail = ({ posts }) => (

  posts && posts.map(post => (
    <article key={post.id} className="mb2 pb4">
      <h2><span className="pv2 ph1 bg-near-black f3 lh-2 white athelas">{post.title}</span></h2>
      <span className="f4 i silver">
        Posted by {post.author}, {moment(post.timestamp).fromNow()}
      </span>
      <p className="avenir f5 avenir near-black measure">{post.body}</p>
      <CommentsContainer />
    </article>


  ))


);

export default PostDetail;
