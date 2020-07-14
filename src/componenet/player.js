import React from 'react';
import '../App.css'
import C from '../context/context'
import Position from '../componenet/position'
export default function Player() {
    const [player1, setplayer1] = React.useState("choose")
    const [player2, setplayer2] = React.useState("choose")
    const c = React.useContext(C)

    React.useEffect(() => {
        if (player1 ==="X") {
            setplayer2("O")
        } 
        if(player1 ==="O") {
            setplayer2("X")
        }
        c.setstate({player:player1})
       // localStorage.setItem('player1',player1)
        //localStorage.setItem('player2',player2)
    }, [player1])
  return (
    <div >
     {
         player1 ==="choose"? 
        <>
          <h2>game start :</h2>
          <p className="r">choose X or O: </p>
          <select className="r" onChange={(event)=> 
           setplayer1(event.target.value)}>
               <option>choose </option>
               <option value="X">X</option>
               <option value="O">O</option>
          </select>
         </>
         :
          <>
            <p>player 1 : {player1}</p>
            <p>player 2 : {player2}</p>
          <h4>next player : {c.state.player}</h4>
            <Position/>
          </>
     }
    </div>
  );
}