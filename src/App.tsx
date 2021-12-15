import React from 'react';
import './App.css';
import { ChooseUs, Content, Footer, MainHeader,Slider } from './components';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Slider/>
      <Content/>
      <ChooseUs/>
      <Footer/>
    </div>
  );
}

export default App;
