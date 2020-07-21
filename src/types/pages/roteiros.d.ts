import { Trip } from '~/types/models';

export interface Props {
  trips: Trip[];
  pathname: string;
}

export interface BannerProps {
  opacity?: number;
}
