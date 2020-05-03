import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form } from "@unform/web";
import Input from "../../components/InputComponent/InputComponent";

import loginImage from "./assets/ImagemLogin.png";
import logoEmpresa from "./assets/logoEmpresa.png";
import loginFacebook from "./assets/loginFacebook.svg";
import loginGoolge from "./assets/loginGoogle.svg";
import loginEmail from "./assets/iconEmail.svg";
import loginLock from "./assets/IconLock.svg";
import StorageUtil, { KEYS } from "../../utils/StorageUtil";

import "./styles.css";
import { observer, inject } from "mobx-react";

const LoginContainer = (props) => {
  
  async function handleSubmit(data)  {
      const isSuccess = await props.authStore.login(data.email, data.password);
  }

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="loginFormDados">
          <h1>Login</h1>
          <div className="loginRedeSociais">
            <div>
              <img src={loginFacebook} alt="Icone login pelo facebook" />
            </div>
            <div>
              <img src={loginGoolge} alt="Icone login pelo google" />
            </div>
          </div>
          <p>Ou entre com a sua conta do e-mail</p>
          <Form onSubmit={handleSubmit} className="loginAuthentication">
            <img src={loginEmail} alt="Icone email" />
            <Input name="email" type="email" />
            <img src={loginLock} alt="Icone senha" />
            <Input name="password" type="password" />
            <div className="check">
              <input type="checkbox" name="rememberPassword" className="o" />
              <p>Lembrar de mim</p>
            </div>
            <p>Esqueceu a senha?</p>
            <button type="submit">Sign in</button>
          </Form>
        </div>
        <div className="loginImg">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default inject((stores) => ({
  authStore: stores.stores.authStore,
}))(observer(LoginContainer));
