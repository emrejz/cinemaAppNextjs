import React from "react";
import Router from "next/router";
import Head from "next/head";
import App from "next/app";
import { SWRConfig } from "swr";
import fetch from "isomorphic-unfetch";
import "../public/static/style.css";
import Navbar from "../components/Navbar";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

let currentPath = "/";
Router.onRouteChangeStart = (e) => {
  // console.log('onRouteChnageStart triggered');

  if (currentPath != e) {
    NProgress.start();
    currentPath = e;
  }
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChnageComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChnageError triggered');
  NProgress.done();
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>cinema Next.js</title>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
        </Head>

        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <Navbar />
          <Component {...pageProps} />
        </SWRConfig>
      </>
    );
  }
}
