import React, { PropTypes, Component } from 'react';
import FooterLink from './FooterLink/FooterLink';
import './FooterLinks.scss';
import Shuffle from 'react-shuffle';

class FooterLinks extends Component {
  constructor(props) {
    super(props);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.startLooping = this.startLooping.bind(this);
    const { footerLinks } = this.props;
    this.state = {
      footerLinks
    };
  }
  componentDidMount() {
    this.startLooping();
  }
  startLooping() {
    setInterval(this.handleShuffle(), 2000);
  }
  handleShuffle() {
    const {
      footerLinks
    } = this.state;
    const newFooterLinks = footerLinks.reverse();
    console.log(`Setting new footer links ${newFooterLinks}`);
    this.setState({
      footerLinks: newFooterLinks
    });
  }
  render() {
    const {
      footerLinks
    } = this.state;
    return (
      <div className="footer-links">
        <ul className="list-inline">
          <Shuffle duration={500} fade={false}>
            {footerLinks.map((link) =>
              <FooterLink key={link.id} footerLink={link} />
            )}
          </Shuffle>
        </ul>
      </div>
    );
  }
}

FooterLinks.propTypes = {
  footerLinks: PropTypes.array.isRequired,
  onHover: PropTypes.func.isRequired
};

export default FooterLinks;
