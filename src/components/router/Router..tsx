import React from 'react';
import App from '../../App';
import { RouteInterface } from '../../types/router/router';
import { LandingPage } from '../landing-page/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { About } from '../about/About';

export function Router() {
    const routes: RouteInterface[] = [{
        path: '/',
        component: (<LandingPage/>)
    },
    {
        path: '/About',
        component: (<About/>)
    },]
    return (<BrowserRouter><Routes>{routes.map(route => (<Route path = {route.path} element={route.component}/>))}</Routes></BrowserRouter>)
}