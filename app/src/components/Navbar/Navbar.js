import React from 'react';
import { Link } from 'react-router';
import styles from './Navbar.scss';
import CrownLogo from '../CrownLogo/CrownLogo';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';
import Headroom from 'react-headroom';

const Styles = {
  hidden: {
    zIndex: 20,
    display: 'none'
  },
  zIndex: {
    height: 85,
    zIndex: 20
  }
};

class Navbar extends React.Component {
  render() {
    return (
      <Headroom className="headroom__wrapper" style={Styles.zIndex}>
        <TopBar className={'navbar active'}>
          <Row>
            <Column className="navbar__center-on-small">
              <TopBarTitle className="navbar__title">
                <Link to="/">
                  <CrownLogo />
                </Link>
              </TopBarTitle>
              <TopBarRight className="navbar__right">
                <Menu className="menu__centered">
                  <MenuItem>
                    <Link to="/portfolio">Portfolio</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/blog">Blog</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/services">Services</Link>
                  </MenuItem>
                </Menu>
              </TopBarRight>
            </Column>
          </Row>
        </TopBar>
      </Headroom>
    );
  }
}


export default Navbar;
