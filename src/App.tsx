import React from 'react';
import './App.css';
import { Content, MainHeader,Slider } from './components';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Slider/>
      <Content/>
    </div>
  );
}

export default App;
