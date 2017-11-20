import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryList = ({ categories }) => (

  <div className="bg-near-black">
    <nav className="mw8 center pv0">

      <NavLink
        exact
        category="home"
        activeClassName="bg-gold black"
        className="pa3 f5 f4-ns ttc link white dib hover-bg-gold bg-animate"
        to="/"
      >Home
      </NavLink>

      {categories && categories.map(({ name, path }) => (
        <NavLink
          key={path}
          category={path}
          activeClassName="bg-gold"
          className="pa3 f5 f4-ns ttc link link white dib hover-bg-gold bg-animate"
          to={`/${path}`}
        >{name}
        </NavLink>
        ))}

      <NavLink
        activeClassName="bg-gold black"
        className="fr pa3 f5 f4-ns ttc link white dib hover-bg-gold bg-animate"
        to="/post/add"
      >Add New Post
      </NavLink>

    </nav>
  </div>

);

export default CategoryList;
