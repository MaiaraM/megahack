import React from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';

import { HomeRoutes } from '../../routes';
import Layout from '../../containers/LayoutContainer/LayoutContainer';


class HomePage extends React.Component {

    
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <HomeRoutes />
                </Layout>
            </React.Fragment>
        )
    }
};

export default (withRouter(observer(HomePage)));