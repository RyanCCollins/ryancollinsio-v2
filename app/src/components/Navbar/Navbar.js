import React from 'react';
import { Link } from 'react-router';
import './Navbar.scss';
import CrownLogo from '../CrownLogo/CrownLogo';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem,
  Button
} from 'react-foundation';
import Headroom from 'react-headroom';

const Styles = {
  hidden: {
    display: 'none'
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiding: props.isHiding
    };
  }
  render() {
    return (
      <Headroom style={this.state.isHiding ? Styles.hidden : 'sticky'}>
        <TopBar className={this.state.isActive ? 'navbar inactive fixed' : 'navbar active'}>
          <Row>
            <Column>
              <TopBarTitle className="navbar__title">
                <Link to="/">
                  <CrownLogo />
                </Link>
              </TopBarTitle>
              <TopBarRight className="navbar__right">
                <Menu>
                  <MenuItem>
                    <Link to="/portfolio" className="active">Portfolio</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/contact">
                      <Button isHollow className="button__golden">Contact Me</Button>
                    </Link>
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

Navbar.Proptypes = {
  isHiding: React.PropTypes.bool.isRequired
};

export default Navbar;
