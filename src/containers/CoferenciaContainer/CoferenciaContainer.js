import React from 'react';

import Video from './assets/veidoProject.svg';
import Chat from './assets/chat.svg';

const ConferenciaContainer = ()=>(
  <div className="Container">
    <div className="VideoConferencia">
      <img src={Video} alt=""/>
      <h1>Nome do palestrante</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Perferendis expedita quam at, soluta, veniam opt
      </p>
    </div>

    <div className="Chat">
    <img src={Chat} alt=""/>
    </div>
  </div>

);

export default ConferenciaContainer;
