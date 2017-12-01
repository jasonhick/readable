import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { apiVote } from '../../actions/vote';

const Voter = props => (
  <div className="fr">

    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.apiVote(props.type, props.id, 'upVote')}
    ><FaThumbsOUp />
    </button>

    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.apiVote(props.type, props.id, 'downVote')}
    ><FaThumbsODown />
    </button>

    <span className="pa2 br3 f4 ba b--black-20">{props.score}</span>

  </div>
);

Voter.propTypes = {
  apiVote: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapDispatchToProps = { apiVote };

export default connect(null, mapDispatchToProps)(Voter);
