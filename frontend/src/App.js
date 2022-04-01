import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import PlayerBios from './components/PlayerBios';
import FlagRecipients from './components/FlagRecipients';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PlayerBios' element={<PlayerBios />} />
        <Route path='/FlagRecipients' element={<FlagRecipients />} />
      </Routes>
    </div>
  );
}

export default App;
