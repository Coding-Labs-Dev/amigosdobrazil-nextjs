import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import '~/styles/bootstrap.scss';

import { Footer } from '~/components';

import { light } from '~/styles/themes';
import GlobalStyles from '~/styles/global';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
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
        <Footer />
      </ThemeProvider>
    );
  }
}
