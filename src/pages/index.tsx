import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import {
  Hero,
  NextTrips,
  WhyUs,
  Gradient,
  Testimonials,
  ContactUs,
  Navigation,
} from '~/components';
import { Props } from '~/types/pages';
import api from '~/services/api';

const index: NextPage<Props> = ({
  heroes,
  nextTrips,
  whyUs,
  testimonials,
  settings,
  pathname,
}) => {
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
      return undefined;
    },
    [opacity],
    heroRef
  );

  return (
    <>
      <Navigation position="fixed" opacity={opacity} pathname={pathname} />
      <Hero heroes={heroes} forwardRef={heroRef} />
      {!!nextTrips.length && <NextTrips nextTrips={nextTrips} />}
      {!!whyUs.length && <WhyUs whyUs={whyUs} />}
      <Gradient>
        {!!testimonials.length && <Testimonials testimonials={testimonials} />}
        <ContactUs settings={settings} />
      </Gradient>
    </>
  );
};

index.getInitialProps = async ({ pathname }) => {
  const { data: heroes } = await api.get('/heroes');
  const { data: nextTrips } = await api.get('/nexttrips');
  const { data: whyUs } = await api.get('/whyus');
  const { data: testimonials } = await api.get('/testimonials');
  const { data: settings } = await api.get('/settings');
  return { heroes, nextTrips, whyUs, testimonials, settings, pathname };
};

export default index;
