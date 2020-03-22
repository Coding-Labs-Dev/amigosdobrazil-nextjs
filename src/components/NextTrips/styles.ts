import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;

  .card {
    transition: all 1s ease-in-out;
    .container {
      transition: all 1s ease-in-out;
    }

    .container {
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
    }

    &:hover {
      transform: scale(1.02);
      .container {
        bottom: 50%;
        transform: translateY(-50%);
      }
    }

    .card-title {
      font-family: Montserrat, sans-serif;
      font-weight: 500;
      font-size: 1.3125rem;
      color: #ffffff;
      letter-spacing: 0.05rem;
      text-align: center;
      line-height: 1.5rem;
    }

    .card-text {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      color: #ffffff;
      letter-spacing: 0.03rem;
      text-align: center;
      line-height: 1.5rem;
      font-style: italic;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
