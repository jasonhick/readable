import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
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
        <header className="bg-gold athelas">
          <div className="mw9 center pa4 pt4-ns ph7-l">
            <time className="f6 mb2 dib ttu tracked"><small>{moment().format('dddd, Do of MMMM , YYYY')}</small></time>
            <h3 className="mv2 mv0-ns f2 f1-m f-headline-l measure-narrow lh-title">
              <span className="bg-black-90 lh-copy white pa2 tracked-tight">Readable</span>
            </h3>
            <h4 className="mv0 f4 f3-ns fw1 athelas i">A React Nanodegree project using Redux</h4>
          </div>

          <div className="bg-near-black">
            <nav className="mb5 mw9 center ph0 pt0-ns ph7-l">
              <NavLink
                exact
                activeClassName="bg-gold black"
                className="pa3 f5 f4-ns ttc link white dib hover-bg-gold bg-animate"
                to="/"
              >Home
              </NavLink>
              {categories && categories.map(category => (
                <NavLink
                  activeClassName="bg-gold"
                  className="pa3 f5 f4-ns ttc link link white dib hover-bg-gold bg-animate"
                  to={`/category/${category.name}`}
                >{category.name}
                </NavLink>
                ))}
            </nav>
          </div>

        </header>

      );
    }
}

export default Header;
