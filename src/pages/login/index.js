import React from 'react';
import {Link} from 'react-router-dom';

import loginImage from './assets/ImagemLogin.png';
import logoEmpresa  from './assets/logoEmpresa.png';
import loginFacebook from './assets/loginFacebook.svg';
import loginGoolge from  './assets/loginGoogle.svg';
import loginEmail from './assets/iconEmail.svg';
import loginLock from './assets/IconLock.svg';
import "./styles.css";

const Login = () => (
  <div className="loginContainer">
    <div className="loginForm">
      <div className="loginFormDados">
        <h1>
          Login
        </h1>
        <div className="loginRedeSociais">
          <div><img src={loginFacebook} alt="Icone login pelo facebook"/></div>
          <div><img src={loginGoolge} alt="Icone login pelo google"/></div>
        </div>
        <p>Ou entre com a sua conta do e-mail</p>

        <form method="post" action="" className="formLogin">
          <div className="loginAuthentication">
            <img src={loginEmail} alt="Icone email"/>
            <input type="email" name="Usuario" id="Usuario" placeholder="E-mail"/>
          </div>
          <div className="loginAuthentication">
            <img src={loginLock} alt="Icone senha"/>
            <input type="password" name="Senha" id="Senha" placeholder="Senha"/>
          </div>
          <div className="loginCheckbox">
              <div className="check">
                <input type="checkbox" name="rememberPassword" className="o"/>
                < p>Lembrar de mim</p>
              </div>
              <p>Esqueceu a senha?</p>
        </div>
        <Link to="/Verification"><input type="submit" value="Login" placeholder="Acessar"/></Link> 
        </form>   
      </div>
      <div className="loginImg"> 
        <img src={loginImage} alt=""/>
      </div>
    </div>
  </div>
);


export default Login;