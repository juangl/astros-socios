import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import Isotype from './Isotype';

class NavbarPrimary extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { expanded } = this.props;
    const { collapsed } = this.state;
    return (
      <Navbar
        fixed="top"
        toggleable="sm"
        className={classNames({
          'navbar-expanded': expanded,
        })}>
        <Container>
          <NavbarToggler onClick={this.toggleNavbar}>
            <i className="fa fa-bars" />
          </NavbarToggler>
          <NavbarBrand href="/">
            <Isotype
              width="35"
              height="35"
            className="d-inline-block align-top navbar-isotype"
          />
          {' '}Astros & Socios
        </NavbarBrand>
        <Collapse navbar isOpen={!collapsed}>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" activeClass="active" href="#" to="galleries" spy={true} smooth={true} duration={500}>
                Galer&iacute;as
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClass="active" href="#" to="about" spy={true} smooth={true} duration={500}>
                Acerca de Nosotros{' '}
              </Link>
            </NavItem>
            <NavItem>
             <Link className="nav-link" activeClass="active" href="#" to="contact" spy={true} smooth={true} duration={500}>
                Contacto
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarPrimary;
