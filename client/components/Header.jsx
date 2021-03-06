import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Header.less';

const Header = (props) => {
  function handlerOffCanvasLeft() {
    document.querySelector('.row-offcanvas-left').classList.toggle('active');
  }

  return (
    <Navbar collapseOnSelect fluid className="header">
      <Navbar.Header>
        <p className="pull-left visible-xs">
          <button
            id="offcanvasleft"
            className="btn btn-xs offcanvas-btn"
            type="button"
            data-toggle="offcanvasleft"
            onClick={handlerOffCanvasLeft}
          >
            <i className="glyphicon glyphicon-chevron-left" />
          </button>
        </p>
        <Navbar.Brand>
          <a href="/">Pitchbook</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Profile Editor</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href="#">Contact</NavItem>
          <NavItem eventKey={3} href="#">FAQs</NavItem>
          <NavItem eventKey={4} href="#">Save and Exit</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
