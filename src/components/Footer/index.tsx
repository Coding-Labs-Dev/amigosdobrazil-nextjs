import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTheme } from 'styled-components';

import { Wrapper } from './styles';

import { FooterNaviation } from '~/configuration/navigation';
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme();
  return (
    <Wrapper fluid className="bg-dark">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="text-center small p-4"
            style={{ color: theme.colors.gray300 }}
          ></Col>
          <Col
            xs={12}
            md={4}
            className="text-center p-4"
            style={{ color: theme.colors.gray300 }}
          >
            Amigos do Brazil - 2020
            <ul className="pt-4 small">
              {FooterNaviation.map(item => (
                <li key={item.path} className="py-1">
                  <Link href={item.path}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col
            xs={12}
            md={4}
            className="text-center small p-4"
            style={{ color: theme.colors.gray600 }}
          >
            Made with &#x2661;
            <br />
            &lt;Coding Labs /&gt;
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
