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

        <meta property="og:title" content="BALLAMAS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ballamas.netlify.app/" />
        <meta property="og:image" content="https://ballamas.netlify.app/socialImg/headerProfil.jpg"/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="Discover Ballamas, your go-to online shop for quality products. Explore our wide selection and enjoy a seamless, fast, and secure shopping experience" />
        <meta property="og:site_name" content="BALLAMAS" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="Discover Ballamas, your go-to online shop for quality products. Explore our wide selection and enjoy a seamless, fast, and secure shopping experience" />

      </Helmet>
    </>
  );
}

export default Meta;
