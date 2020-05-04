import React, { useState } from 'react';
import "./styles.css";


import eventLogo from "./assets/LogoEvento.svg";
import palestranteImg from "./assets/palestranteImg.svg";
import iconGoogle from "./assets/iconGoogle.svg";
import Carousel from './assets/Carousel.svg';
import Patrocinadores from './assets/Patrocinadores.png';

import VerificationContainer from '../../containers/VerificationContainer/VerificationContainer';
import { observer, inject } from 'mobx-react';
import { palestras } from '../../utils/consts/Const'
import { withRouter } from 'react-router-dom';



const EventsPage = (props) => {

  const goPalestra = (number) => {
    props.history.push(`/event/:uuidEvent/conferencia/${number}`)
  }

 
  return <div className="Container">
    <div className="eventLogo">
      <img src={eventLogo} alt="Imagem do Logo de Evento" />
    </div>


    <div className="CardEventsProgramming">
      <div className="lineP">
        <p>Programação do evento</p>
        <hr />
      </div>
    </div>


    <div className="CardEventsDay">
      {/* Data do evento e palestras*/}
      <div className="CardEventsDate" >
        <div className="CardEventsdateday">
          <p> 1 de maio de 2020, sexta-feira</p>
        </div>
          <button className="button">Esconder Palestras</button>
      </div>

      {/* Palestras e Palestrantes */}

      <div className='container-palestras'>
        {palestras.map((m, index) => {
          return (
            <div className="CardEvents" >
              <div className="cardLecture">
                <div className="cardImg">
                  <img src={palestranteImg} alt="Imagem do palestrante" />
                </div>
                <div className="cardLectureDescription">
                  <div className="cardPresentation">
                    <h1 onClick={() => goPalestra(index+1)} className="ButtonPalestra">{m.titulo}</h1>
                    <p>{m.palestrante}</p>
                  </div>
                  <div className="cardDescription">
                    <p>{m.texto}</p>
                  </div>
                  <div className="cardTime">
                    <p>Horário</p>
                    <div className="cardTimeInitial">
                      <span>Início: {m.horario} </span>
                      <span>Duração: {m.duração}</span>
                    </div>
                  </div>
                  <div className="iconGoogle">
                    <img src={iconGoogle} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

    <div className="CardEventsProgramming">
      <div className="lineP">
        <p>Palco das Palestras</p>
        <hr />
      </div>
    </div>
  <div className="Carousel"><img src={Carousel} alt=""/></div>

  <div className="CardEventsProgramming">
      <div className="lineP">
        <p>Feira Online</p>
        <hr />
      </div>
    </div>

    <div className="Patrocinadores"><img src={Patrocinadores} alt=""/></div>
  

  </div>
};


export default inject((stores) => ({
  eventStore: stores.stores.eventStore,
}))(withRouter(EventsPage));



