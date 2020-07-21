import { NextTrip, Hero, Settings, WhyUs, Testimonial } from '~/types/models';

export interface Props {
  heroes: Hero[];
  nextTrips: NextTrip[];
  whyUs: WhyUs[];
  testimonials: Testimonial[];
  settings: Settings;
  pathname: string;
}
