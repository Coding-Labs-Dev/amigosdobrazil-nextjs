import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0;

  h5 {
    color: #2f3640;
  }

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: -2;

    .gradient {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(52, 113, 167, 0) 0%,
        #c4a7a0 100%
      );
    }

    img {
      width: 100%;
    }
  }
`;
