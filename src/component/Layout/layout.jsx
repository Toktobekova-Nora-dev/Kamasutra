import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainRoutes from '../routes/MainRoutes';

const Layout = () => {
    return (
        <div className='layout'>
      <Header/>
      <main>
         <MainRoutes/>
      </main>
      <Footer/>
    </div>
    );
};

export default Layout;