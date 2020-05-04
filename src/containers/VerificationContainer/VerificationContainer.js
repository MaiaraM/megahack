import React, { useState } from 'react';
import Footer from '../../components/footer';
import { inject, observer } from 'mobx-react';

import { Form } from "@unform/web";
import Input from "../../components/InputComponent/InputComponent";
import { Route, withRouter } from 'react-router-dom';

const VerificationContainer = (props) => {

    const { eventStore, history } = props;

    function handleSubmit(data)  {
        let event = eventStore.getEvent(data.code);
        history.push(`/event/${data.code}`)
    }

    return <React.Fragment>
        <div className="verification">
            <p>Digite o código do evento que você deseja participar</p>
            <Form onSubmit={handleSubmit} className="formVerifica">
                <Input type="text"  name='code' placeholder="Digite seu codigo aqui"  />
                <button type="submit">Entrar no evento</button>
            </Form>
        </div>
        <Footer />
    </React.Fragment>

};


export default inject((stores) => ({
    eventStore: stores.stores.eventStore,
}))(withRouter(observer(VerificationContainer)));