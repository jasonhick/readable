import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as readAPI from '../../utils/api';

class Header extends Component {
    state = {
      categories: [],
    }

    componentDidMount() {
      readAPI.getCategories().then((categories) => {
        this.setState({ categories });
      });
    }

    render() {
      const { categories } = this.state;

      return (
        <header className="fixed top-0 w-100 ph3 pv3 pv4-ns ph4-m ph5-l bg-black-90 ">
          <nav className="f6 fw6 ttu tracked">
            {categories && categories.map(category => (
              <Link class="link dim white dib mr3" href="#" to={`/category/${category.name}`}>{category.name}</Link>
              ))}
          </nav>
        </header>
      );
    }
}

export default Header;
