import React from 'react';
import PropTypes from 'prop-types';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const Menu = props => (
  <div className={props.cssClass}>
    <button type="button" className="bn bg-white-70">
      <FaEllipsisH />
    </button>
    <div className="child absolute top-0 right-0 pa1 bg-white br3">
      <button
        onClick={props.handleToggleEdit}
        className="db w-100 ph4 pv2 tc bn hover-bg-gold br3 pointer"
      >Edit
      </button>
      <button
        onClick={props.handleOnDelete}
        className="db w-100 ph4 pv2 tc bn hover-bg-gold br3 pointer"
      >Delete
      </button>
    </div>
  </div>
);

Menu.propTypes = {
  handleToggleEdit: PropTypes.func.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};

export default Menu;
