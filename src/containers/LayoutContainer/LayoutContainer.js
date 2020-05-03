import React from 'react';
import Footer from "../../components/footer";
import Header from "../../components/header";

const Layout = ({children}) => (
  <div className="Body">
    <Header/>
    {children}
    
  </div>
);
export default Layout;