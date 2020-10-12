import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import '~/styles/bootstrap.scss';

import { Footer } from '~/components';
import { Settings } from '~/types/models';

import { light } from '~/styles/themes';
import GlobalStyles from '~/styles/global';
import api from '~/services/api';

interface Props {
  settings: Settings;
}

export default class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    const { data: settings } = await api.get('/settings');

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps: { ...pageProps, settings } };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Head>
          <title>Amigos do Brazil</title>
        </Head>
        <Component {...pageProps} theme={light} />
        <Footer settings={pageProps.settings} />
      </ThemeProvider>
    );
  }
}
