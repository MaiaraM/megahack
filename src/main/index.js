import React from 'react';
import Footer from "../components/footer";
import Verification from "../pages/verification";
import Header from "../components/header";
import EventsPage from "../pages/eventoPage";
import "./styles.css";

const Main = () => (
  <div className="Body">
    <Header/>
   {/*  <Verification/> */}
    <EventsPage/>
    <Footer/>
    
  </div>
);
export default Main;