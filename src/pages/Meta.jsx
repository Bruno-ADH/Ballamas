import React from 'react';
import { Helmet } from 'react-helmet';

function  Meta() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/android-chrome-512x512.png" sizes="512x512" />
        <title>BALLAMAS</title>
      </Helmet>
    </>
  );
}

export default Meta;
