import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import lazzyLoad from './helpers/lazzyLoad';

import PrivateRoute from './helpers/PrivateRoute';

const requireAsAPromise = path =>
  new Promise(resolve => {
    require.ensure([], () => {
      resolve(require(path));
    });
  });

const MainLayout = lazzyLoad(() =>
  requireAsAPromise('./layouts/Main/index.js').then(module => module.default));
const GalleryLayout = lazzyLoad(() =>
  requireAsAPromise('./layouts/Gallery/index.js').then(
    module => module.default,
  ));
const AdminLayout = lazzyLoad(() =>
  requireAsAPromise('./layouts/Admin/index.js').then(module => module.default));
const LoginLayout = lazzyLoad(() =>
  requireAsAPromise('./layouts/Login/index.js').then(module => module.default));
const NotFound = lazzyLoad(() =>
  requireAsAPromise('./layouts/NotFound/index.js').then(
    module => module.default,
  ));

const MainRoute = () => (
  <div>
    <Route exact path="/(gallery|)/:id?" component={MainLayout} />
    <Route exact path="/gallery/:id" component={GalleryLayout} />
  </div>
);
const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/(gallery|)/:id?" component={MainRoute} />
        <Route exact path="/login" component={LoginLayout} />
        <PrivateRoute exact path="/admin" component={AdminLayout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
