import React from 'react';
import "./styles.css";

const Verification =()=>(
  <div className="verificationContainer">
    <div className="verification">
        <p>Entre com  o código do evento</p>
        <input type="text" name="codigo" id="codigo"/>
        <input type="submit" value="Entrar" placeholder="ENTER"/>
    </div>
  </div>
);

export default Verification;