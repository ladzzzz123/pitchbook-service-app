import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './Sidebar.less';

const Header = props => (
  <Navbar className="sidebar">
    <div className="sidebar__logo" />
    <Navbar.Header>Company Info</Navbar.Header>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="sidebar__common-nav">
        <NavItem eventKey={1} href="#" className="checked">Basic info</NavItem>
        <NavItem eventKey={2} href="#/offices" className="active">Offices</NavItem>
        <NavItem eventKey={3} href="#">Competitors</NavItem>
      </Nav>
      <Nav className="sidebar__company-nav">
        <NavItem eventKey={4} href="#">My Firm</NavItem>
        <NavItem eventKey={5} href="#">Deals</NavItem>
        <NavItem eventKey={6} href="#">Financials</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
