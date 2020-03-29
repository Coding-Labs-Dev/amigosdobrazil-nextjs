import styled from 'styled-components';

interface Props {
  show: boolean;
}

export const Wrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #fff;
  transition: all 0.25s ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
`;
