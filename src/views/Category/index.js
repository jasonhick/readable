import React from 'react';
import PropTypes from 'prop-types';
import PostsContainer from '../../components/posts/container';

function CategoryView({ match }) {
  const { category } = match.params;
  const filter = category || 'all';

  return (
    <div>
      <h2 className="f1 mv0">{filter}</h2>
      <PostsContainer category={filter} />
    </div>
  );
}

CategoryView.propTypes = {
  match: PropTypes.string.isRequired,
};


export default CategoryView;
