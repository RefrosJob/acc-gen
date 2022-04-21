import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteInterface } from '../../types/router/router';
import LandingPage from '../landing-page/LandingPage';
import About from '../about/About';
import InvoiceGenerator from '../invoice-generator/InvoiceGenerator';

export default function Router() {
        const routes: RouteInterface[] = [{
                path: '/',
                component: (<LandingPage />),
        },
        {
                path: '/About',
                component: (<About />),
        },
        {
                path: '/invoicegenerator',
                component: (<InvoiceGenerator />),
        },
        ];
        return (
                <BrowserRouter>
                        <Routes>
                                {routes.map((route) => (<Route path={route.path} element={route.component} />))}
                        </Routes>
                </BrowserRouter>
        );
}
