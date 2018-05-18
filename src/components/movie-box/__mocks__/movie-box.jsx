import React from 'react';

export const MovieBox = ({ children, ...rest }) => React.createElement(
  'MovieBox', rest, children
);
