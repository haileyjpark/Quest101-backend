import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductListCategory from './pages/ProductListCategory/ProductListCategory';
import MyPage from './pages/MyPage/MyPage';
import Creator from './pages/CreatorCenter/Creator';
import CreatorEdit from './pages/CreatorCenter/CreatorEdit';
import CreatorNav from './components/Nav/CreatorNav';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <CreatorNav />
      <Routes>
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route
          path="/"
          element={<ProductList isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route path="/category" element={<ProductListCategory />} />
        <Route
          path="/detail/:id"
          element={<ProductDetail isLogin={isLogin} />}
        />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/creator/:id/edit" element={<CreatorEdit />} />
      </Routes>
      <Footer isLogin={isLogin} setIsLogin={setIsLogin} />
    </BrowserRouter>
  );
};

export default Router;
