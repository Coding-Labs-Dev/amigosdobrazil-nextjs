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

import { FaBars } from 'react-icons/fa';
import { MainNavigation } from '~/configuration/navigation';

import { Props } from './Navigation';

import { Navbar } from './styles';

const Navigation: React.FC<Props> = ({
  opacity = 1,
  position = 'sticky',
  slug,
  pathname,
  canBook,
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
                <NavItem key={`${item.baseURL}_${item.path}`}>
                  {item.baseURL === pathname ? (
                    <AnchorLink
                      href={`#${item.path}`}
                      offset={50}
                      className="nav-link"
                    >
                      {item.label}
                    </AnchorLink>
                  ) : (
                    <NavLink
                      href={`${item.baseURL}${
                        item.path ? `#${item.path}` : ''
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </NavItem>
              );
            })}
            {slug && canBook && (
              <Link
                href={`/roteiros/${slug}/reservar`}
              >
                <Button color="warning" className="my-auto text-uppercase mt-2">
                  Reservar
                </Button>
              </Link>
            )}
            {!slug && (
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
