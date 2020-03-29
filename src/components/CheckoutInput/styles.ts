import styled, { css, keyframes } from 'styled-components';

import { Col } from 'reactstrap';

import { ContainerProps } from './CheckoutInput';

const shake = keyframes`
    8%, 41% {
        transform: translateX(-7px);
    }
    25%, 58% {
        transform: translateX(7px);
    }
    75% {
        transform: translateX(-4px);
    }
    92% {
        transform: translateX(4px);
    }
    0%, 100% {
        transform: translateX(0);
    }
`;

export const Wrapper = styled(Col)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;

  svg {
    transition: all 0.25s ease-in-out;
  }
  ${props =>
    props.disabled &&
    css`
      * {
        cursor: not-allowed;
        opacity: 0.8;
      }
    `}
`;

export const Container = styled.div<ContainerProps>`
  cursor: text;
  div {
    display: flex;
  }

  ${props =>
    props.error &&
    css`
      animation: ${shake} 0.4s linear;
    `}

  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    appearance: none;
    background: none;
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
`;

export const ErrorMsg = styled.div`
  height: 0;
  color: ${props => props.theme.colors.danger};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  text-overflow: clip;
  &.active {
    height: 1.5rem;
  }
`;
