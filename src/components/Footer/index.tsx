import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTheme } from 'styled-components';

import { Wrapper } from './styles';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const theme = useTheme();
  return (
    <Wrapper fluid className="bg-dark">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="first-col text-center small p-4"
            style={{ color: theme.colors.gray300 }}
          >
            Made with &#x2661;
            <br />
            &lt;Coding Labs /&gt;
          </Col>
          <Col
            xs={12}
            md={4}
            className="second-col text-center p-4"
            style={{ color: theme.colors.gray300 }}
          >
            &copy; 2020 - Amigos do Brazil
          </Col>
          <Col
            xs={12}
            md={4}
            className="third-col text-center p-4"
            style={{ color: theme.colors.gray600 }}
          >
            <a
              href="https://www.facebook.com/amigosdobrazil/"
              className="px-2 text-light"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/amigosdobrazil/"
              className="px-2 text-light"
            >
              <FaInstagram size={22} />
            </a>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
