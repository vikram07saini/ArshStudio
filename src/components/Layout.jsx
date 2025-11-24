import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom';
import ScrollToTop from"../../src/Pages/ScrollToTop/ScrollToTop"
function Layout() {
  return (
    <>
     <ScrollToTop />
    <div>
     
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default Layout
