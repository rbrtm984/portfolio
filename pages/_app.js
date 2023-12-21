// pages/_app.js

import React from 'react';
import RootLayout from '../src/app/layout'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
