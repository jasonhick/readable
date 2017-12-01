import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getCategories } from '../../actions/categories';
import CategoryList from './list';

class CategoryContainer extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return React.createElement(CategoryList);
  }
}

CategoryContainer.propTypes = {
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getCategories };

export default withRouter(connect(null, mapDispatchToProps)(CategoryContainer));
