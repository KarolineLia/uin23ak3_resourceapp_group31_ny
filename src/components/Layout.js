import Tabs from './Tabs'
import React from 'react';
import Categorypage from './Categorypage';
import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div id="front-page-container">
            <header>
                <h1>Ressursarkiv</h1>
            </header>
            <main>
                <Tabs/>
                <Outlet />
            </main>
        </div>
    )
}