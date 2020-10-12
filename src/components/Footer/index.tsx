import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTheme } from 'styled-components';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Wrapper } from './styles';
import { Settings } from '~/types/models';

interface Props {
  settings: Settings;
}

const Footer: React.FC<Props> = ({ settings }) => {
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
            <a href={settings.facebook} className="px-2 text-light">
              <FaFacebook size={22} />
            </a>
            <a href={settings.instagram} className="px-2 text-light">
              <FaInstagram size={22} />
            </a>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
