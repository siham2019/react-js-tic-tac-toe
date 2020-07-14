import React,{useState,useEffect, useContext} from 'react';
import '../App.css'
import C from '../context/context'
export default function Position(){
    const [row, setrow] = useState(0)
    const [coulomn, setcoulomn] = useState(0)
    const c = useContext(C)
    useEffect(() => {
        c.setstate1({row:row,col:coulomn})

    }, [row,coulomn])
    return(
        <div className="d">
            <p style={{margin:36}}>choose position :</p>
            <form>
               <label>row : </label>
                <input type="number" max={3} min={1} onChange={
                    (e)=> 
                    {
                        setrow(e.target.value)
                    }
                }/>
                  {' '}
               <label>coloumn : </label>
               <input type="number" max={3} min={1} onChange={
                    (e)=> 
                    {
                        setcoulomn(e.target.value)
                    }
                }/>
  
            </form>  
        </div>
    )
}