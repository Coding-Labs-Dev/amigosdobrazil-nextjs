import React from 'react';
// import VideoPlayer from 'react-simple-video-player';
import ReactPlayer from 'react-player';

import { Props } from './Testimonials';
import { Container, Row, Col } from 'reactstrap';
import { Video } from './styles';

// import { Container } from './styles';

const Testimonials: React.FC<Props> = ({ testimonials }) => (
  <Container>
    <h1 className="text-dark">O que dizem sobre nós?</h1>
    <Container>
      <Row>
        {testimonials.map(video => (
          <Col
            key={video.id}
            className="justify-content-center text-center p-4"
            xs="12"
            md="6"
            lg="4"
          >
            <Video className="border-0 shadow">
              <ReactPlayer
                className="react-player"
                url={video.url}
                light={video.poster}
                width="100%"
                height="100%"
              />
            </Video>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Testimonials;
