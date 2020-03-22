declare module 'react-simple-video-player' {
  interface VideoPlayerProps {
    url: string;
    poster?: string;
    width?: number;
    height?: number;
    autosize?: boolean;
    autoplay?: boolean;
    loop?: boolean;
    aspectRatio?: string;
  }

  interface VideoPlayerState {
    playing: boolean;
    overlatShown: boolean;
  }

  export default class VideoPlayer extends React.PureComponent<
    VideoPlayerProps,
    VideoPlayerState
  > {}
}
