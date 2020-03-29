export type BackgroundData = {
  url: string;
  opacity: string;
  position:
    | 'left top'
    | 'left center'
    | 'left bottom'
    | 'right top'
    | 'right center'
    | 'right bottom'
    | 'center top'
    | 'center center'
    | 'center bottom';
};
export interface Props {
  title: string;
  subTitle?: string;
  titlePosition: 'top' | 'center' | 'bottom';
  background: BackgroundData;
  forwardRef?: React.fowardRef;
}
