/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NextPage } from 'next';
import { Container, Card } from 'reactstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import api from '~/services/api';

import { Props } from '~/types/pages/galeria/[slug]';
import {
  Wrapper,
  ImageZoom,
  ImageContainer,
  Image,
} from '~/styles/styled/galeria_styles';
import { Gradient, Navigation } from '~/components';

const galeria: NextPage<Props> = ({ gallery, pathname }) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  const handleZoom = (src: string) => setImageSrc(src);

  return (
    <Wrapper>
      <Navigation pathname={pathname} position="fixed" />
      <Gradient>
        <Container className="py-5" id={gallery.slug}>
          <Card className="px-0 px-md-5 pb-5 border-0">
            <h1 className="text-dark pb-2 px-4 px-md-0">{gallery.title}</h1>
            <ResponsiveMasonry>
              <Masonry gutter="10px">
                {gallery.photos.map(photo => (
                  <img
                    key={photo.photo.url}
                    src={photo.photo.url}
                    alt={gallery.title}
                    style={{
                      width: '100%',
                      display: 'block',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleZoom(photo.photo.url)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Card>
        </Container>
      </Gradient>
      <ImageZoom open={!!imageSrc} onClick={() => setImageSrc(null)}>
        {imageSrc && (
          <ImageContainer>
            <Image src={imageSrc} />
          </ImageContainer>
        )}
      </ImageZoom>
    </Wrapper>
  );
};

galeria.getInitialProps = async ({ pathname, query }) => {
  const { data: gallery } = await api.get(`/galleries/${query.slug}`);
  return { gallery, pathname };
};

export default galeria;
