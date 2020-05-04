import React from 'react';
import { Provider } from 'mobx-react';
import { ToastContainer, Slide } from 'react-toastify';


//Rotas
import RootStore from '../../stores/RootStore';
import Routes from '../../routes';

//Estilos
import '../../libs/libs'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const rootStore = new RootStore();
    return (
        <div className="App" style={{ height: '100vh' }}>
            <Provider stores={rootStore}  >
                <main>
                    <Routes />
                </main>
                <ToastContainer transition={Slide}></ToastContainer>
            </Provider>
        </div>
    )
}

export default App;
