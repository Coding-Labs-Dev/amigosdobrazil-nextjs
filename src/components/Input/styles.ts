import styled, { css, keyframes } from 'styled-components';

import { ContainerProps } from './Input';

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

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(200, 199, 249, 0.4) 0%,
    rgba(251, 199, 212, 0.4) 100%
  );
  border-radius: 8px;
  padding: 12px 25px;
  height: 64px;
  width: 100%;
  margin-top: 24px;
  cursor: text;
  color: #000;

  ${props =>
    props.textArea &&
    css`
      height: 128px;
      align-items: flex-start;
    `}

  ${props =>
    props.error &&
    css`
      animation: ${shake} 0.4s linear;
      border: 1px solid;
      border-color: ${props => props.theme.colors.danger};
    `}

  input,
  textarea {
    margin-left: 16px;
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
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
  }

  textarea {
    padding: 0;
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
