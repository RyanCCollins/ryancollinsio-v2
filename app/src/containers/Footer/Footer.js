import React, { PropTypes } from 'react';
import { FooterLinks } from 'components';
import { connect } from 'react-redux';
import './Footer.scss';

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
  </footer>
);

Footer.propTypes = {
  footerLinks: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  footerLinks: state.footerLinks
});

export default connect(mapStateToProps)(Footer);
