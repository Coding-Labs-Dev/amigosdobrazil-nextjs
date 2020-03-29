import { Trip } from '~/components/Trip/Trip';

export interface Props {
  trips: Trip[];
  pathname: string;
}

export interface BannerProps {
  opacity?: number;
}
