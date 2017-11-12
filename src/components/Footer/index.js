import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mt5 pv5 pv4-l ph4 bg-near-black white-80">
        <p className="f6"><span className="dib mr4 mr5-ns">©2017 Jason Hick Ltd</span>
          <a className="link white-80 hover-gold" href="/terms">About</a> /
          <a className="link white-80 hover-gold" href="/privacy"> Terms </a> /
          <a className="link white-80 hover-gold" href="#"> Get in touch</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
