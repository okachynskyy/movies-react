import { App } from './components/app';
import { SearchLayout } from './layouts/search';
import { DetailsLayout } from './layouts/details';
import { NotFound } from './components/not-found';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: SearchLayout
      },
      {
        path: '/search',
        exact: true,
        component: SearchLayout
      },
      {
        path: '/film/:id',
        component: DetailsLayout
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
