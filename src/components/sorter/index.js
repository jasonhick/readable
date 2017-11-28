import React from 'react';

const Sorter = props => (
  <div className="mb3 tr pb3 bb b--black-10">
    <span className="f4 mr2 b avenir">Sort by:</span>
    <select defaultValue={props.sortBy} onChange={props.handleSortChange}>
      <option value="-voteScore">Highest vote</option>
      <option value="voteScore">Lowest vote</option>
      <option value="-timestamp">Newest</option>
      <option value="timestamp">Oldest</option>
      <option value="title">A-Z</option>
    </select>
  </div>
);

export default Sorter;
