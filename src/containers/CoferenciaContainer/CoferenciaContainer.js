import React, { useState } from 'react';

import Video from './assets/veidoProject.svg';
import { Form } from "@unform/web";
import Input from "../../components/InputComponent/InputComponent";
import { observer, inject } from 'mobx-react';

const ConferenciaContainer = (props) => {

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
      <div className='pergunta-container' onScroll>
        {list && list.map(msg => {
          return <>
              <p>{/* {props.userStore.user.username} - */} {msg}</p>
          </> 
        })}
      </div>
      <Form onSubmit={data => handleSubmit(data.msg)} className="formConferencia">
        <div><Input type="text" name='msg' placeholder="Faça sua pergunta" /></div>
        <div><button type="submit">Enviar </button></div>
      </Form>
    </div>
  </div>
};

export default inject((stores) => ({
  userStore: stores.stores.userStore,
})) (observer(ConferenciaContainer));
