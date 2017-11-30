import React from 'react';
import PropTypes from 'prop-types';
import PostsContainer from '../../components/posts/container';

function CategoryView({ match }) {
  const { category } = match.params;
  const filter = category || 'all';

  return (
    <PostsContainer category={filter} />
  );
}

CategoryView.propTypes = {
  match: PropTypes.string.isRequired,
};


export default CategoryView;