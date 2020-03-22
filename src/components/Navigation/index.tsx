import React, { useState } from 'react';
import Link from 'next/link';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from 'reactstrap';

import { MainNavigation } from '~/configuration/navigation';

import { Props } from './Navigation';

import { Navbar } from './styles';
import { FaBars } from 'react-icons/fa';

const Navigation: React.FC<Props> = ({ opacity = 1, position = 'sticky' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(p => !p);

  return (
    <Navbar
      expand="lg"
      sticky={position === 'sticky' ? 'top' : ''}
      fixed={position === 'fixed' ? 'top' : ''}
      opacity={opacity}
    >
      <Container>
        <NavbarBrand href="/">
          <img
            src="logo.png"
            alt="Amigos do Brazil"
            style={{ maxHeight: 48 }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <FaBars />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 justify-content-end flex-column flex-lg-row text-center">
            {MainNavigation.map(item => (
              <NavItem key={item.path}>
                <NavLink href={item.path} active={item.path === '/'}>
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
            <Link href="/reservar">
              <Button color="warning" className="text-uppercase mx-4">
                Reservar
              </Button>
            </Link>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
