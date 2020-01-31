import React from 'react';
import './App.css';
import Store from './Store';
import RobotList from './components/RobotList'

function App() {
  return (
    <Store>
      <header>
        <h3>This is the header</h3>
      </header>
      <p>
        Robot Hanger will go here
        <RobotList  />
      </p>
    </Store>
  );
}

export default App;
