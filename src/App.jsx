import React from 'react';
import Nav from './components/navigation/Nav'
import Page from './components/Page';
import Header from './components/header/Header';

import './assets/styles/app.scss';

const App = () => (
    <div>
        <Nav />
        <Page>
            <Header />
        </Page>
    </div>
);

export default App;
