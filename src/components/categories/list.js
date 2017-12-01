import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FaHome from 'react-icons/lib/fa/home';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

const CategoryList = ({ categories }) => (

  <div className="bg-near-black">
    <nav className="mw8 h3 center pv0">

      <NavLink
        exact
        category="home"
        activeClassName="bg-gold black"
        className="fl dn min-h-100 inline-flex-ns items-center pa3 no-underline f3 ttc tc white hover-bg-gold bg-animate"
        to="/"
      >
        <FaHome />
      </NavLink>

      {categories && categories.map(({ name, path }) => (
        <NavLink
          key={path}
          category={path}
          activeClassName="bg-gold"
          className="min-h-100 inline-flex items-center pa3 no-underline f4 ttc tc white hover-bg-gold bg-animate"
          to={`/${path}`}
        >{name}
        </NavLink>
      ))}

      <NavLink
        activeClassName="bg-gold"
        className="fr min-h-100 inline-flex items-center pa3 no-underline f4 ttc tc white hover-bg-gold bg-animate"
        to="/post/add"
      >
        <FaPlusCircle className="dn-ns f3" />
        <span className="dn dib-ns">Add New Post</span>
      </NavLink>

    </nav>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: Object.keys(state.categories)
    .map(category => state.categories[category]),
});

export default withRouter(connect(mapStateToProps)(CategoryList));
