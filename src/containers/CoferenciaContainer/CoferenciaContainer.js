import React, { useState } from 'react';

import Enviar from './assets/Enviar.svg';

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
        {console.log(props.userStore)}
        {list && list.map(msg => {
          return <>
              <div className="chatResponse">{props.userStore.user.firstName} {msg}</div>
          </> 
        })}
      </div>
 

      <div className="chatQuestion">

        <Form onSubmit={data => handleSubmit(data.msg)} className="formConferencia">
          <div className="chatQuestionInput">
            <div><Input type="text-area" name='msg'  placeholder="Faça sua pergunta" /></div>
            <div><button type="submit"><img src={Enviar} alt="Enviar Mensagem"/> </button></div>
          </div>
        </Form>
      </div>
  </div>
  </div>
};

export default inject((stores) => ({
  userStore: stores.stores.userStore,
})) (observer(ConferenciaContainer));
