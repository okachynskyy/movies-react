import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes } from 'react-router-config';
import { Root } from './components/root';

import configureStore from './configure-store';
import routes from './routes';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}


export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
      let fetchData = route.component.fetchData;
      return fetchData instanceof Function ? fetchData(store, match, req.query) : Promise.resolve(null);
    });

    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    // const preloadedState = store.getState();
    // res.send(renderHTML(htmlString, preloadedState));

    Promise.all(promises).then(() => {
      const htmlString = renderToString(root);
      const preloadedState = store.getState();
      res.send(renderHTML(htmlString, preloadedState));
    });
  };
}
