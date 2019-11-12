import React from "react";
import App from "next/app";
import Head from "next/head";
import { GlobalState } from "../store/GlobalState";
import Navbar from "../components/Navbar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>cinema Next.js</title>
          <link href="/static/style.css" rel="stylesheet" />
        </Head>
        <GlobalState>
          <Navbar />
          <Component {...pageProps} />
        </GlobalState>
      </>
    );
  }
}

export default MyApp;
