import React from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';

import { HomeRoutes } from '../../routes';


class HomePage extends React.Component {


    render() {
        return (
            <React.Fragment>
                <HomeRoutes />
            </React.Fragment>
        )
    }
};

export default (withRouter(observer(HomePage)));