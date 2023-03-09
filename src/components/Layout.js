import Tabs from './Tabs'
import React from 'react';
import Categorypage from './Categorypage';

export default function Layout() {
    return (
        <div id="front-page-container">
            <header>
                <h1>Ressursarkiv</h1>
            </header>
            <main>
                <Tabs/>
                <Categorypage/>
            </main>
        </div>
    )
}