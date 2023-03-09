import Tabs from './Tabs'
import React from 'react';

export default function Layout() {
    return (
        <div id="front-page-container">
            <header>
                <h1>Ressursarkiv</h1>
            </header>
            <main>
                <nav>
                <Tabs/>
                </nav>
            </main>
        </div>
    )
}