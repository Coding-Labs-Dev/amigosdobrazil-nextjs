import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Container, Card, CardImg, Row, Col } from 'reactstrap';

import api from '~/services/api';

import { Props } from '~/types/pages/galeria';
import { Wrapper, Banner } from '~/styles/styled/galeria_styles';
import { Gradient, Navigation } from '~/components';

const galeria: NextPage<Props> = ({ galleries, pathname }) => (
  <Wrapper>
    <Navigation pathname={pathname} position="fixed" />
    <Gradient>
      <Container className="py-5" id="galeria">
        <Card className="px-0 px-md-5 pb-5 border-0">
          <h1 className="text-dark pb-2 px-4 px-md-0">Galeria</h1>
          <Row>
            {galleries.map(gallery => (
              <Col
                key={`gallery_${gallery.slug}`}
                xs={12}
                md={6}
                xl={4}
                className="my-4"
              >
                <Card className="shadow-md border-0">
                  <Link href={`galeria/${gallery.slug}`}>
                    <Banner>
                      <CardImg
                        top
                        width="100%"
                        src={gallery.photos[0].photo.url}
                        alt={gallery.title}
                      />
                      <div>
                        <h1>{gallery.title}</h1>
                      </div>
                    </Banner>
                  </Link>
                </Card>
              </Col>
            ))}
            {!galleries.length && (
              <p style={{ textAlign: 'center', width: '100%' }}>
                Nenhuma galeria encontrada
              </p>
            )}
          </Row>
        </Card>
      </Container>
    </Gradient>
  </Wrapper>
);

galeria.getInitialProps = async ({ pathname }) => {
  const { data: galleries } = await api.get('/galleries');
  return { galleries, pathname };
};

export default galeria;
