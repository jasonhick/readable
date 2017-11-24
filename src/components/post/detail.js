import React from 'react';
import moment from 'moment';
import Voter from '../voter';
import CommentsContainer from '../comments/container';

const PostDetail = ({ posts }) => (

  posts && posts.map(post => (
    <article key={post.id} className="mw6 mb2 pb4">
      <h2><span className="pv2 ph1 bg-near-black f1 lh-2 white athelas">{post.title}</span></h2>
      <span className="f4 i silver">
        Posted by {post.author}, {moment(post.timestamp).fromNow()}
      </span>

      <p className="avenir f5 avenir near-black measure">{post.body}</p>
      <Voter type="post" id={post.id} score={post.voteScore} />
      <h2 className="cb mt6 pt3 bt b--black-10 f2 i athelas silver">Comments:</h2>
      <CommentsContainer />
    </article>
  ))

);

export default PostDetail;
