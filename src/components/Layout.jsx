// src/components/Layout.js
import React from 'react';
import NeuralNetwork from './NeuralNetwork';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <NeuralNetwork />
      {children}
    </div>
  );
};

export default Layout;
