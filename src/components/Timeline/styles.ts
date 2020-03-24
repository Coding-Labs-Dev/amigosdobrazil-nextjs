import styled from 'styled-components';

export const Wrapper = styled.div`
  ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 1.5rem;

    /* Line */
    &:before {
      content: ' ';
      background: #ccc;
      display: inline-block;
      position: absolute;
      left: 17px;
      width: 2px;
      height: 100%;
      z-index: 400;
      border-radius: 1rem;
    }

    li {
      /* Timeline item circle marker */
      &:before {
        content: ' ';
        background: #fff;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 1px solid #ccc;
        left: 11px;
        width: 14px;
        height: 14px;
        z-index: 401;
        transition: all 0.25s ease-in-out;
      }
      &:after {
        content: ' ';
        background: #fff;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.colors.info};
        left: 2px;
        width: 32px;
        height: 32px;
        z-index: 400;
        transform: translateY(-28px);
        opacity: 0;
        transition: all 0.25s ease-in-out;
      }

      &.active {
        &:before {
          background: ${props => props.theme.colors.info};
          border-color: ${props => props.theme.colors.info};
        }
        &:after {
          opacity: 1;
        }
      }
    }
  }
`;
