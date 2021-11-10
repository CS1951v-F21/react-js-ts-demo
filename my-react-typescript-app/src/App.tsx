import React from 'react';
import './App.css';
import { ClassExample, FunctionalExample, PromiseExample, TimeExample } from './components';
import donutImage from './static/donut.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={donutImage} className="cs1951v-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FunctionalExample/>
        <ClassExample/>
        <TimeExample />
        <PromiseExample />
      </header>
    </div>
  );
}

export default App;
