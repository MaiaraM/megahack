import React from 'react';
import Footer from "../../components/footer";
import "./styles.css";

const Verification =()=>(
  
  <div className="verificationContainer">
    <div className="verification">
        <p>Digite o código do evento que você deseja participar</p>
        <input type="text" name="codigo" id="codigo" placeholder="Digite seu codigo aqui"/>
        <input type="submit" value="Entrar no evento" />
    </div>
  </div>

);


export default Verification;