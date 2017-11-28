import React from 'react';
import { connect } from 'react-redux';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { apiVote } from '../../actions/vote';

const Voter = props => (

  <div className="fr">

    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.upVote(props.type, props.id)}
    ><FaThumbsOUp />
    </button>

    <button
      type="button"
      className="pa2 br3 f4 ba b--black-20 mr1 hover-bg-gold bg-animate pointer grow"
      onClick={() => props.downVote(props.type, props.id)}
    ><FaThumbsODown />
    </button>

    <span className="pa2 br3 f4 ba b--black-20">{props.score}</span>

  </div>

);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  upVote: (type, id) => dispatch(apiVote(type, id, 'upVote')),
  downVote: (type, id) => dispatch(apiVote(type, id, 'downVote')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Voter);
