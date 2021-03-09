import React, { lazy } from 'react';
import withSuspenseLoaderHOC from '../utils/withSuspenseLoaderHOC';
import { Route } from 'react-router-dom';
import withErrorBoundary from '../utils/withErrorBoundary';

const HomePage = lazy(() => import('../pages/HomePage'))
const HOME = '/'

export default [
  {path: HOME, component: HomePage, exact: true},
].map(({component, ...route}, index) => (
  <Route {...route} component={withErrorBoundary(withSuspenseLoaderHOC(component))} key={index}/>
))