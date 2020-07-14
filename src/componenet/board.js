import React from 'react';
import '../App.css'
import C from '../context/context'

function Board() {
  const context = React.useContext(C)
    const [square, setSquare] = React.useState({
        square:[
            ["","",""],["","",""],["","",""]
        ],
       t:true 
    })

    const [win, setwin] = React.useState("")
    React.useEffect(() => {
       if(square.t === false)
       {    
            if(context.state.player === "X")
               context.setstate({player:"O"})
            else if(context.state.player === "O")
               context.setstate({player:"X"})
               if(square.square[0][0] === square.square[1][1] && square.square[2][2] === square.square[1][1])
               setwin(square.square[0][0])
           else if(square.square[2][0] === square.square[1][1] && square.square[0][2] === square.square[1][1])
               setwin(square.square[2][0])

           else{  
     for (var i = 0; i < square.square.length; i++) {

          if(square.square[i][0] === square.square[i][1] && square.square[i][1] === square.square[i][2])
                  setwin(square.square[i][0])
          else if(square.square[0][i] === square.square[1][i] && square.square[1][i] === square.square[2][i])
          setwin(square.square[0][i])
     

        }
  
      }
        

  
          }
      
     }, [square])
    const g=(e)=> {
      e.preventDefault()
      const indexes = context.state1
       const s = square.square
       const col =parseInt(indexes.col)-1
       const row = parseInt(indexes.row)-1
       if(s[row][col]==="X" || s[row][col]==="O")
            alert("("+indexes.row+","+indexes.col+")this one is ocuped try to choose another one ")
        else
      {
        s[row][col] = context.state.player
          setSquare({square:s,t:false})
        }
  }

  return (
    <div >
      {
        win!== ""?<h2>{win} win !!</h2>:null
      }
{  context.state.player !== "choose"? <button onClick={g}>submit</button>
:null}        <table >
            {
                square.square.map((item,index)=>
                  <tr> {
                      
                         item.map(it=>
                           <td>{it}</td>
                             )
                        }
                 </tr>
                                )
            }
            
        </table>
    </div>
  );
}

export default Board;