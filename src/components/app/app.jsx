import * as React from 'react';
import { renderRoutes } from 'react-router-config'

export function App(props) {
  return (
    <React.Fragment>
      {renderRoutes(props.route.routes)}
    </React.Fragment>
  );
}
