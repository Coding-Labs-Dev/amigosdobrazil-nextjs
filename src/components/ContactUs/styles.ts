import styled from 'styled-components';
import { Container } from 'reactstrap';

export const Wrapper = styled(Container)`
  .gradient {
    background: linear-gradient(135deg, #c8c7f9 0%, #fbc7d4 100%);
    @media screen and (min-width: 992px) {
      z-index: 1;
    }
  }
  .contact-form {
    padding-left: 3rem;
    padding-right: 3rem;
    transition: all 0.75s ease-in-out;
    @media screen and (min-width: 992px) {
      margin-left: -4rem;
      margin-top: 4rem;
      padding-left: 5.5rem;
      padding-right: 5.5rem;
    }
  }

  form {
    .submit {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const Info = styled.div`
  p {
    font-size: 1rem;
    color: #000000;
  }

  ul {
    margin: 24px 0;
    li {
      padding: 24px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      color: #000;
      p {
        display: block;
        margin-left: 24px;
        span {
          display: block;
        }
      }
    }
  }
`;
