import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import PlayerBios from './components/PlayerBios';
import FlagRecipients from './components/FlagRecipients';
import BootRecipients from './components/BootRecipients';
import InsightToNextYear from './components/InsightToNextYear';
import Rules from './components/Rules';
import History from './components/History';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PlayerBios' element={<PlayerBios />} />
        <Route path='/FlagRecipients' element={<FlagRecipients />} />
        <Route path='/BootRecipients' element={<BootRecipients />} />
        <Route path='/InsightToNextYear' element={<InsightToNextYear />} />
        <Route path='/History' element={<History />} />
        <Route path='/Rules' element={<Rules />} />
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
