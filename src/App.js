import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import './css/main.css'
import {Route, Routes} from 'react-router-dom'
import Tabs from './components/Tabs';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
