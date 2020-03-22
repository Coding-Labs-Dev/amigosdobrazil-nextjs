import styled from 'styled-components';
import { Card } from 'reactstrap';

export const Video = styled(Card)`
  position: relative;
  padding-top: 177.78%;
  background: none !important;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
