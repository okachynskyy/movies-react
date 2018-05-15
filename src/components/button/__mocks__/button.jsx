import React from 'react';

export const Button = ({ children, ...rest }) => React.createElement(
  'Button', rest, children
);
