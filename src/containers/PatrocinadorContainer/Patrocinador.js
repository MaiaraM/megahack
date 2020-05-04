import React from 'react';
import LogoPatrocinador from './assets/LogoPatrocinador.svg';
import VideoPatrocinador from './assets/Video.svg';
import PerfilPatrocinador from './assets/PerfilPatrocinador.svg';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/footer';

const PatrocinadorContainer = () =>(
  <div className="Container">
    <div className="ContainerConteudo">
    <div className="ContainerConteudoTopo">
        <div className="LogoPatrocinador"><img src={LogoPatrocinador} alt="Logo do Patrocinador"/></div>
        <div className="VideoPatrocinador"><img src={VideoPatrocinador} alt=""/></div>
      </div>
    
    <div className="ContainerConteudoChat">
      <div className="Chat">
            <h1>Vamos conversar?</h1>
            <p>Chame alguém da nossa equipe para conversar, adoramos conhecer pessoas novas</p>
      </div>
        <div className="ChatSuporte">
          <div className="ChatPerfil">
            <div className="ChatImgPerfil">
              <img src={PerfilPatrocinador} alt="Perfil Patrocinador"/>
            </div>
            <p>Andre</p>
          </div>
          

          <div className="ChatPerfil">
            <div className="ChatImgPerfil">
              <img src={PerfilPatrocinador} alt=""/>
            </div>
            <p>Andre</p>
          </div>

          <div className="ChatPerfil">
            <div className="ChatImgPerfil">
              <img src={PerfilPatrocinador} alt=""/>
            </div>
            <p>Andre</p>
          </div>

          <div className="ChatPerfil">
            <div className="ChatImgPerfil">
              <img src={PerfilPatrocinador} alt=""/>
            </div>
            <p>Andre</p>
          </div>

          <div className="ChatPerfil">
            <div className="ChatImgPerfil">
              <img src={PerfilPatrocinador} alt=""/>
            </div>
            <p>Andre</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />

  </div>
);

export default (withRouter(PatrocinadorContainer));