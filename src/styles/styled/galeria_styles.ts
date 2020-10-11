import styled from 'styled-components';
import { BannerProps } from '~/types/pages/roteiros';

export const Wrapper = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  .shadow-md {
    @media screen and (min-width: 576px) {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
  }
`;

export const Banner = styled.div<BannerProps>`
  position: relative;
  cursor: pointer;
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      z-index: 1;
    }
    @supports (-webkit-text-stroke: 1px white) {
      h1 {
        -webkit-text-stroke: 1px white;
        -webkit-text-fill-color: transparent;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.colors.gray900};
      opacity: ${props => Number(props.opacity) || 0.5};
    }
  }
`;

interface ImageZoomProps {
  open: boolean;
}

export const ImageZoom = styled.div<ImageZoomProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: ${props => (props.open ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.85);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 25px;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${props => `url(${props.src})`};
`;
