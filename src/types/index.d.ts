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
  settings: Settings;
  pathname: string;
}

export interface Settings {
  readonly name: string;
  readonly email: string;
  readonly street: string;
  readonly neigh: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly mainPhone: string;
  readonly altPhone?: string;
}
