import React from 'react';
import Player from './componenet/player'
import Board from './componenet/board'
import './App.css'
import C from './context/context'
import Provider from './context/Provider'
function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Provider>
         <Player/>
         <Board/>
      </Provider>
    
    </div>
  );
}

export default App;
