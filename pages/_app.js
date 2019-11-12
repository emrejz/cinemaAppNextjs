import React from "react";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>cinema Next.js</title>
          <link href="/static/style.css" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
