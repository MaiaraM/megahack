import React from 'react';
import "./styles.css";

import User from "./assets/User.svg";
import logo from "./assets/logo.svg";
import { withRouter } from 'react-router-dom';

const Header =(props)=> (
  <header id="header">
    <div className="header">
      <div className="headerNav">
      <img src={logo} onClick={() => props.history.push(`/event/2`)} alt="Logo plataforma"/>
        <div className="headerUser">
          <p>
            Olá , Poliana Lima
          </p>
          <img src={User} alt="Imagem do usuário"/>
        </div>
      </div>
    </div>
  {/*  <div className="acessibility">
      <div>
          <img src={acessibilityA} alt="Aumentar letra"/>
      </div>
      <div>
          <img src={acessibilitya} alt="Dimuinuir letra"/>
      </div>
     </div> */}
  </header>
);

export default (withRouter(Header));