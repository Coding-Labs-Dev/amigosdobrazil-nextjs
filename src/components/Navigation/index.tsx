import React, { useState } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

const Navigation: React.FC<Props> = ({
  opacity = 1,
  position = 'sticky',
  slug,
  pathname,
}) => {
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
            src="/logo.png"
            alt="Amigos do Brazil"
            style={{ maxHeight: 48 }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <FaBars />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 justify-content-end flex-column flex-lg-row text-center">
            {MainNavigation.map(item => {
              return (
                <NavItem key={item.path}>
                  {item.baseURL === pathname ? (
                    <AnchorLink
                      href={`#${item.path}`}
                      offset={50}
                      className="nav-link"
                    >
                      {item.label}
                    </AnchorLink>
                  ) : (
                    <NavLink href={`${item.baseURL}#${item.path}`}>
                      {item.label}
                    </NavLink>
                  )}
                </NavItem>
              );
            })}
            {slug ? (
              <Link
                href="/roteiros/[slug]/reservar"
                as={`/roteiros/${slug}/reservar`}
              >
                <Button color="warning" className="ml-auto text-uppercase mt-2">
                  Reservar
                </Button>
              </Link>
            ) : (
              <Link href="/roteiros">
                <Button color="warning" className="text-uppercase mx-4">
                  Reservar
                </Button>
              </Link>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
