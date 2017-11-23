import React from 'react';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

const Menu = props => (
  <div className="absolute h1 w2 top-1 right-1 tr pointer hide-child">
    <button type="button" className="bn bg-white-70">
      <FaEllipsisH />
    </button>
    <div className="child absolute top-0 right-0 pa1 bg-white br3">
      <button
        onClick={props.toggleEdit}
        className="db w-100 ph4 pv2 tc bn hover-bg-gold br3 pointer"
      >Edit
      </button>
      <button
        onClick={props.deleteComment}
        className="db w-100 ph4 pv2 tc bn hover-bg-gold br3 pointer"
      >Delete
      </button>
    </div>
  </div>
);

export default Menu;
