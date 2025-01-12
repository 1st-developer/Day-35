import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const MainPage = ({toggleMenu}) => {
  return (
    <div className="main-page">
      <Header toggleMenu={toggleMenu} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;