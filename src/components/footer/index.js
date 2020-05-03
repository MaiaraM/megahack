import React from 'react';
import "./styles.css";
import logoEmpresa from "./assets/logo.svg";


const Footer =()=>(
  <footer id="Footer">
    <div className="Footer">
      <div className="footerImg">
        <div className="footerImg"><img src={logoEmpresa} alt="Logo da empresa"/></div>
      </div>
  </div>
  </footer>
);

export default Footer;