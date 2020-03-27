export interface Props {
  nextTrips: NextTrip[];
}

export interface NextTrip {
  slug: string;
  title: string;
  date: string;
  background: string;
}
