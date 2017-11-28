import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CategoryContainer from '../categories/container';

const Header = () => (

  <header className="bg-gold athelas">

    <div className="mw8 pv4 ph3 ph0-l center">
      <time className="f6 mb2 dib ttu tracked">
        <small>{moment().format('dddd, Do of MMMM , YYYY')}</small>
      </time>
      <h3 className="mv2 mv0-ns f2 f1-m f-headline-l measure-narrow lh-title">
        <Link to="/" className="bg-black-90 lh-copy white pa2 no-underline tracked-tight hover-bg-gold">Readable</Link>
      </h3>
      <h4 className="mv0 f4 f3-ns fw1 athelas i">A React Nanodegree project using Redux</h4>
    </div>

    <CategoryContainer />

  </header>

);

export default Header;
