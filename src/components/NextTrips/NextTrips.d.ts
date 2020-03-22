export interface Props {
  nextTrips: NextTrip[];
}

export interface NextTrip {
  slug: string;
  name: string;
  date: string;
  background: {
    position: string;
    image: string;
  };
}
