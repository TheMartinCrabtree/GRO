import React, { useContext } from 'react';
import './App.css';
import Store, { Context } from './Store';
import RobotList from './components/RobotList';
import MainHud from './components/MainHud';

function App() {
  

  return (
    <Store>
      <main className="Main">
        <div className="grid-container" >
          <div className="item1">
            <header>
              <h3>Create Your Robot Team:</h3>
            </header>
          </div>
          <div className="item2">
            Robot Hanger will go here
            <RobotList  />
          </div>
          <div className="item3">
            <h3>Main Article</h3>
            <MainHud />
          </div>
          <div className="item5">
            <footer>
              <h5>footer</h5>
            </footer>
          </div>

        </div>
      </main>
    </Store>
  );
}

export default App;
