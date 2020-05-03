import React, { useState } from 'react';
import "./styles.css";

import eventLogo from "./assets/LogoEvento.svg";
import iconDown from "./assets/iconDown.svg";
import iconUp from "./assets/iconUp.svg";
import palestranteImg from "./assets/palestranteImg.svg";
import iconGoogle from "./assets/iconGoogle.svg";
import VerificationContainer from '../../containers/VerificationContainer/VerificationContainer';
import { observer } from 'mobx-react';

const EventsPage = () => {
  const [state, setstate] = useState(false);

  return <div className="Container">
    {state ?
      <VerificationContainer setEventUUid={setstate(false)} />
      :
      <>
        {console.log(state)}
        <div className="eventLogo">
          <img src={eventLogo} alt="Imagem do Logo de Evento" />
        </div>
        <div className="CardEventsProgramming">
          <div className="lineP">
            <p>Programação do evento</p>
            <hr />
          </div>
        </div>
        <div className="CardEventsDate" >
          <div className="CardEventsday">
            <p> 1 de maio de 2020, sexta-feira</p>
          </div>
          <p className="button">Esconder Palestras <img src={iconDown} alt="" /></p>
        </div>

        {/* Palestras e Palestrantes */}.
      <div className="CardEvents">
          <div className="cardLecture">
            <div className="cardImg">
              <img src={palestranteImg} alt="Imagem do palestrante" />
            </div>
            <div className="cardLectureDescription">
              <div className="cardPresentation">
                <h1>Design thinking + Comunicação Não-Violenta</h1>
                <p>João da Silva, UI/UX Designer na Empresa</p>
              </div>
              <div className="cardDescription">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              </p>
              </div>
              <div className="cardTime">
                <p>Horário</p>
                <div className="cardTimeInitial">
                  <span>Início: 09h00 </span>
                  <span>Duração: 02 horas</span>
                </div>
              </div>
              <div className="iconGoogle">
                <img src={iconGoogle} alt="" />
              </div>
            </div>
          </div>

          <div className="cardLecture">
            <div className="cardImg">
              <img src={palestranteImg} alt="Imagem do palestrante" />
            </div>
            <div className="cardLectureDescription">
              <div className="cardPresentation">
                <h1>Design thinking + Comunicação Não-Violenta</h1>
                <p>João da Silva, UI/UX Designer na Empresa</p>
              </div>
              <div className="cardDescription">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              </p>
              </div>
              <div className="cardTime">
                <p>Horário</p>
                <div className="cardTimeInitial">
                  <span>Início: 09h00 </span>
                  <span>Duração: 02 horas</span>
                </div>
              </div>
              <div className="iconGoogle">
                <img src={iconGoogle} alt="" />
              </div>
            </div>
          </div>

          <div className="cardLecture">
            <div className="cardImg">
              <img src={palestranteImg} alt="Imagem do palestrante" />
            </div>
            <div className="cardLectureDescription">
              <div className="cardPresentation">
                <h1>Design thinking + Comunicação Não-Violenta</h1>
                <p>João da Silva, UI/UX Designer na Empresa</p>
              </div>
              <div className="cardDescription">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              </p>
              </div>
              <div className="cardTime">
                <p>Horário</p>
                <div className="cardTimeInitial">
                  <span>Início: 09h00 </span>
                  <span>Duração: 02 horas</span>
                </div>
              </div>
              <div className="iconGoogle">
                <img src={iconGoogle} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Proximas palestras */}

        <div className="CardEventsDate" >
          <div className="CardEventsday">
            <p> 1 de maio de 2020, sexta-feira</p>
          </div>
          <p className="button">Esconder Palestras <img src={iconUp} alt="" /></p>
        </div>
      </>
    }
  </div>


};

export default (observer(EventsPage));