
import React, { PropTypes } from 'react';
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

const Navbar = () => (
  <TopBar className="navbar">
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

export default Navbar;
