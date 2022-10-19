import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from './routes';

const HomePage = lazy(() => import('app/pages/home-page'));

export const RouterComponent = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
