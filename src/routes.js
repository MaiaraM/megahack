import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
 
import LoadingComponent from './components/LoadingComponent/LoadingComponent'; 



//Imports apenas importados caso forem requisitados pela aplicação.
const LoginCenterPage = lazy(() => import('./pages/login'));
const EventsPage = lazy(() => import('./pages/eventoPage'));




//Rotas globais de nossa aplicação manager.
export default inject(stores => (
    { authStore: stores.stores.authStore }))(withRouter(observer((props) => {

        //função logout
        const logout = () => {
            props.authStore.logout().then(() => props.history.push("/"));
        }
        return (
            <Suspense fallback={<LoadingComponent />}>
                <Switch>
                    <Route exact path='/login' render={() => <Redirect to={"/"} />} />
                    <Route exact path='/logout' render={() => logout()} />
                    <PrivateRoute path="/" component={EventsPage} isAuthenticated={props.authStore.isAuthenticated} />
                    <Redirect to="/error-page" /> 
                </Switch>
            </Suspense>
        )
    }))); 


export const HomeRoutes = () => (
    <Switch>
        <Route exact path='/' component={EventsPage} />
        <Redirect to="/error-page" />
    </Switch>)

/**Private route é responsável por verificar se o usuário está logado ou não. */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return(
    <Route {...rest} render={props => isAuthenticated ?
        <Component {...props} /> : <LoginCenterPage {...props} />} />); 
}