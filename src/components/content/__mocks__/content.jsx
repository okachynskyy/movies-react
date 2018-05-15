import React from 'react';

export const Content = ({ children, ...rest }) => React.createElement(
  'Content', rest, children
);
