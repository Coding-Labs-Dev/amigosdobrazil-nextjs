import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Trip, Navigation } from '~/components';
import { Props } from './[slug]';
import api from '~/services/api';

const index: NextPage<Props> = ({ trip }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useScrollPosition(
    ({ currPos }) => {
      if (!currPos.y) return setOpacity(0);
      const height = heroRef.current?.offsetHeight;
      if (height) {
        const newValue = Math.abs(currPos.y / height);
        if (newValue >= 1) return setOpacity(1);

        if (Math.abs(newValue - opacity) >= 0.5) setOpacity(newValue);
      }
    },
    [opacity],
    heroRef
  );

  return (
    <>
      {/* <Hero heroes={heroes} forwardRef={heroRef} /> */}
      <Navigation position="fixed" opacity={opacity} />
      <Trip
        trip={trip}
        fowardRef={heroRef}
        documents={trip.documents}
        includes={trip.includes}
        itinerary={trip.itinerary}
      />
    </>
  );
};

index.getInitialProps = async ({ query }) => {
  const { data: trip } = await api.get(`/trips/${query.slug}`);
  console.log(trip.title, query.slug);
  return { trip };
};

export default index;
