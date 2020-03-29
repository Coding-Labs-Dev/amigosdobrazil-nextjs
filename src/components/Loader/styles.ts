import styled, { keyframes } from 'styled-components';

const loaderSpin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const loaderPath = keyframes`
  0% {
    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
  }
  50% {
    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;
  }
  100% {
    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;

  .react-spinner-loader-svg-calLoader {
    width: 230px;
    height: 230px;
    transform-origin: 115px 115px;
    animation: ${loaderSpin} 1.4s linear infinite;
  }

  .react-spinner-loader-svg-cal-loader__path {
    animation: ${loaderPath} 1.4s ease-in-out infinite;
  }
`;
