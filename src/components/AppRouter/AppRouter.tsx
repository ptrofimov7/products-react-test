import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import ProductPage from '../../pages/ProductPage';
import AddProductPage from '../../pages/AddProductPage';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product">
          <Route index element={<ProductPage />} />
          <Route
            path="add"
            element={<AddProductPage />}
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
