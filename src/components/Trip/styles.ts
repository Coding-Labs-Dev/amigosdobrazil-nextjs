import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;

  h1.paymentPlan-title {
    width: 100%;
    text-align: left;
    font-family: 'Fjalla One', sans-serif;
    font-size: 2rem;
    color: ${props => props.theme.colors.gray800};
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    padding: 0;
  }

  h1.part-title {
    width: 100%;
    text-align: left;
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.75rem;
    color: ${props => props.theme.colors.gray800};
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    padding: 0;
  }
`;
