import React from 'react';

export const ErrorBoundary = ({ children, ...rest }) => React.createElement(
  'ErrorBoundary', rest, children
);
