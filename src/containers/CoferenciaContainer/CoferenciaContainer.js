import React, { useState } from 'react';

import Video from './assets/veidoProject.svg';
import { Form } from "@unform/web";
import Input from "../../components/InputComponent/InputComponent";

const ConferenciaContainer = () => {

  const [list, setList] = useState([])

  const handleSubmit = async (data) => {
    setList(list => [...list, data])
  }

  return <div className="ConferenciaContainer">
    <div className="VideoConferencia">
      <img src={Video} alt="" />
      <h1>Nome do palestrante</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis expedita quam at, soluta, veniam opt
      </p>
    </div>

    <div className="Chat">
      <div className='pergunta-container'>
        {list && list.map(msg => <p>{msg}</p> )}
      </div>
      <Form onSubmit={data => handleSubmit(data.msg)} className="formConferencia">
        <Input type="text" name='msg' placeholder="Digite sua pergunta" />
        <button type="submit">Entrar no event</button>
      </Form>
    </div>
  </div>
};

export default ConferenciaContainer;
