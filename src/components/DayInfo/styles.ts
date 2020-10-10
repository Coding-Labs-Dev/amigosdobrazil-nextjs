import styled from 'styled-components';

export const Wrapper = styled.div`
  .card {
    cursor: pointer;
  }
  h1 {
    width: 100%;
    text-align: left;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.gray800};
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    padding: 0;
  }

  .description {
    text-align: left;
    font-size: 0.9rem;
  }
`;
