export type HeroData = {
  id: string;
  background: string;
  position: string;
  opacity: number;
};
export interface Props {
  heroes: HeroData[];
  forwardRef: React.fowardRef;
}
