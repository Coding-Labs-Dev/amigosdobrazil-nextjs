import styled from 'styled-components';

export const Wrapper = styled.div`
  h1 {
    width: 100%;
    text-align: left;
    font-family: 'Fjalla One', sans-serif;
    font-size: 2rem;
    color: ${props => props.theme.colors.gray800};
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    padding: 0;
  }
`;
