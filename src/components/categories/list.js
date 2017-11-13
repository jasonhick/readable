import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryList = ({ categories }) => (

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
          to={`/category/${category.path}`}
        >{category.name}
        </NavLink>
        ))}

    </nav>
  </div>

);

export default CategoryList;
