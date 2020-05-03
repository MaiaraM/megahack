import React from 'react';
import { Provider } from 'mobx-react';

//Rotas
import RootStore from '../../stores/RootStore';
import Routes from '../../routes';
import Layout from '../../containers/LayoutContainer/LayoutContainer';

//Estilos
import '../../libs/libs'

const App = () => {
    const rootStore = new RootStore();
    return (
        <div className="App" style={{height:'100vh'}}>
            <Provider stores={rootStore}  >
                    <Layout>
                        <Routes />
                    </Layout>
            </Provider>
        </div>
    )
}

export default App;
