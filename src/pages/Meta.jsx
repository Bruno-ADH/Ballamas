import React from 'react';
import { Helmet } from 'react-helmet';

function Meta() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/android-chrome-512x512.png" sizes="512x512" />

        <title>BALLAMAS</title>

        <meta property="og:title" content="BALLAMAS" />
        <meta property="og:description"
          content="Discover Ballamas, your go-to online shop for quality products. Explore our wide selection and enjoy a seamless, fast, and secure shopping experience" />
        <meta property="og:image" content="https://ballamas.netlify.app/socialImg/headerProfil.jpg" />
        <meta property="og:url" content="https://ballamas.netlify.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BALLAMAS" />
        <meta name="twitter:description"
          content="Discover Ballamas, your go-to online shop for quality products. Explore our wide selection and enjoy a seamless, fast, and secure shopping experience" />
        <meta name="twitter:image" content="https://ballamas.netlify.app/socialImg/headerProfil.jpg" />
        <meta name="twitter:url" content="https://ballamas.netlify.app/" />
      </Helmet>
    </>
  );
}

export default Meta;
