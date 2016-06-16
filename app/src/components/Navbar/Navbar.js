
import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  render() {
    return (
      <TopBar className={this.state.isActive ? 'navbar inactive fixed' : 'navbar active'}>
        <Row>
          <Column>
            <TopBarTitle className="navbar__title"><Link to="/">RYANCOLLINS.IO</Link></TopBarTitle>
            <TopBarRight className="navbar__right">
              <Menu>
                <MenuItem>
                  <Link to="/portfolio">Porfolio</Link>
                </MenuItem>
              </Menu>
            </TopBarRight>
          </Column>
        </Row>
      </TopBar>
    );
  }
}

export default Navbar;
