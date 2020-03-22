import React from 'react';
import Loader from 'react-loader-spinner';
import { useTheme } from 'styled-components';

import { Container } from './styles';

const LoaderSpinner = () => {
  const theme = useTheme();
  return (
    <Container>
      <Loader
        type="Plane"
        color="rgb(255, 165, 0)"
        secondaryColor={theme.colors.gray500}
      />
    </Container>
  );
};

export default LoaderSpinner;
