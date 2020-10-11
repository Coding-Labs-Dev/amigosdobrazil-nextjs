import styled from 'styled-components';

export const Wrapper = styled.div`
  & > div {
    min-height: 100vh;
  }
  h2 {
    font-family: Montserrat, sans-serif;
    font-weight: 700 !important;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: 700 !important;
    font-size: 1.5rem !important;
  }

  label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    user-select: none;

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      height: 20px;
      width: 20px;
      transition: all 0.1s ease-in-out;
      background: ${props => props.theme.colors.gray500};
    }

    input[type='checkbox'] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:hover {
        & ~ .checkmark {
          background: ${props => props.theme.colors.warning};
        }
      }
      &:checked {
        & ~ .checkmark {
          background: ${props => props.theme.colors.warning};
          &:after {
            content: '';
            display: block;
            position: absolute;
            left: 8px;
            top: 4px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
`;
