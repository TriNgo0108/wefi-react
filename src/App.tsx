import React from 'react';
import './App.css';
import { ChooseUs, Content, MainHeader,Slider } from './components';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Slider/>
      <Content/>
      <ChooseUs/>
    </div>
  );
}

export default App;
