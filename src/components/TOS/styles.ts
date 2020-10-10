import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    font-family: Montserrat, sans-serif;
    font-size: 1.5rem;
    font-weight: 700 !important;
    text-align: center;
  }

  h3 {
    font-family: Montserrat, sans-serif;
    font-weight: 700 !important;
    font-size: 1.5rem !important;
  }

  .tos-data {
    ul.clausules {
      margin: 10px 0;

      li {
        font-size: 0.9rem;
        line-height: 1.5rem;
        padding: 5px 0;
        text-indent: -30px;
        margin-left: 30px;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: auto max-content;
      padding: 10px 25px;
      font-size: 0.9rem;
      width: 100%;

      & > div {
        padding: 10px;
        border-bottom: 1px solid #000;

        &.header {
          font-weight: 700;
        }
      }
    }

    .date {
      padding: 20px 0;
      text-align: right;
    }

    .signature {
      display: flex;
      font-size: 0.9rem;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 50px;

      & > div {
        border-top: 1px solid #000000;
        padding-top: 10px;
        text-align: center
      }
    }
  }

`;
