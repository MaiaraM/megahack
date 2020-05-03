import React from 'react';
import Footer from '../../components/footer';

const VerificationContainer = ({ setEventUuid }) => (
    <React.Fragment>
        <div className="verification">
            <p>Digite o código do evento que você deseja participar</p>
            <input type="text" name="codigo" id="codigo" placeholder="Digite seu codigo aqui" />
            <input type="submit" value="Entrar no evento" onClick={() => setEventUuid} />
        </div>
        <Footer />
    </React.Fragment>

);


export default VerificationContainer;