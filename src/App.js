import React from 'react';
import './App.css';
import Store from './Store';
import RobotList from './components/RobotList'

function App() {
  return (
    <Store>
      <main>
        <header>
          <h3>Create Your Robot Team</h3>
        </header>
        <div>
          Robot Hanger will go here
          <RobotList  />
        </div>
      </main>
    </Store>
  );
}

export default App;
