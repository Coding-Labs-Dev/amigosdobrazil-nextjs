import { DefaultTheme } from 'styled-components';
import { HeroData } from '~/components/Hero/Hero';
import { NextTrip } from '~/components/NextTrips/NextTrips';
import { WhyUs } from '~/components/WhyUs/WhyUs';
import { Testimonial } from '~/components/Testimonials/Testimonials';

export interface Props {
  heroes: HeroData[];
  nextTrips: NextTrip[];
  whyUs: WhyUs[];
  testimonials: Testimonial[];
}
