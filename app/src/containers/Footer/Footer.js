import React, { PropTypes } from 'react';
import { FooterLinks } from 'components';
import { connect } from 'react-redux';
import './Footer.scss';

// TODO: move to components after refactor
const Footer = ({
  footerLinks
}) => (
  <footer className="footer__wrapper gradient-green-blue">
    <FooterLinks footerLinks={footerLinks} />
    <h4
      className="footer-copyright-text centered text-white raleway uppercase"
    >
      © 2016 - Ryan Collins
    </h4>
    <h5
      className="footer-text centered text-white raleway"
    >
      Licensed under the MIT license.  Feel free to <a href="https://github.com/RyanCCollins/ryancollins.io">dig through the code</a>.
    </h5>
  </footer>
);

Footer.propTypes = {
  footerLinks: PropTypes.array.isRequired
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  footerLinks: state.footerLinks
});

export default connect(mapStateToProps)(Footer);
