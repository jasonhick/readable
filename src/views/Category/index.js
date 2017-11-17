import React from 'react';
import PostsContainer from '../../components/posts/container';

function CategoryView(props) {
  const { category } = props.match.params || 'all';

  return (
    <div>
      <h2 className="f1 mv0">{category}</h2>
      <PostsContainer category={category} />
    </div>
  );
}

export default CategoryView;
