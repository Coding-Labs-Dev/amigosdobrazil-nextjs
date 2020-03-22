export interface Testimonial {
  id: number;
  url: string;
  poster: string;
}

export interface Props {
  testimonials: Testimonial[];
}
