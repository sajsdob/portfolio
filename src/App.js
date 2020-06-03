import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
       <Footer />
       <div id='about'></div>
       <div id='projects'></div>
       <div id='education'></div>
    </div>
  );
}

export default App;
