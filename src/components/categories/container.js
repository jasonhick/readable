import React, { Component } from 'react';
import * as readAPI from '../../utils/api';
import CategoryList from './list';

class CategoryContainer extends Component {
    state = {
      categories: [],
    }

    componentDidMount() {
      readAPI.getCategories().then((categories) => {
        this.setState({ categories });
      });
    }

    render() {
      return React.createElement(CategoryList, { categories: this.state.categories });
    }
}

export default CategoryContainer;
