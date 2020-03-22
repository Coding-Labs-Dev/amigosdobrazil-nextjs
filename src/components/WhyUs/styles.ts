import styled from 'styled-components';
import { Card } from 'reactstrap';

interface BannerProps {
  position: string;
  image: string;
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;

  h2 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.5rem;
    color: #ffffff;
    letter-spacing: 0.04rem;
  }
`;

export const Banner = styled(Card)<BannerProps>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
  background-image: ${props => `url(${props.background})`};
  min-height: 600px !important;
  border: none !important;
  border-radius: 0 !important;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.gray900};
    opacity: ${props => props.opacity};
  }
`;

Banner.defaultProps = {
  position: 'center',
};
