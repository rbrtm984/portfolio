// src/app/RootLayout.jsx

import React from 'react';
import "./globals.css";
import Navbar from './components/Navbar'; // Adjust the import path as necessary

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Add Footer or any other components here if needed */}
    </>
  );
};

export default RootLayout;
