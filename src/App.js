import './App.css';
import Layout from './components/Layout';
import './css/main.css'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Categorypage from './components/Categorypage';
import React from 'react';
import Main from './components/Main'

function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/html' element={<Categorypage category="html"/>}/>
            <Route path='/css' element={<Categorypage category="css"/>}/>
            <Route path='/javascript' element={<Categorypage category="javascript"/>}/>
            <Route path='/react' element={<Categorypage category="react"/>}/>
            <Route path='/sanity' element={<Categorypage category="headless-cms"/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
