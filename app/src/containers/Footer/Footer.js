import React, { PropTypes } from 'react';
import { FooterLinks } from 'components';
import { connect } from 'react-redux';
import './Footer.scss';

const Footer = ({
  footerLinks
}) => (
  <footer className="footer__wrapper gradient-green-blue">
    <h1 className="section-header text-primary">Find me on my favorite social networks</h1>
    <FooterLinks footerLinks={footerLinks} />
  </footer>
);

Footer.propTypes = {
  footerLinks: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  footerLinks: state.footerLinks
});

export default connect(mapStateToProps)(Footer);
