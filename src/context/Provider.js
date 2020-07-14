import React,{useState} from 'react';
import C from './context'
export default function Provider(props) {
    const [state, setstate] = useState({
        player:'',

    })
    const [state1, setstate1] = useState({

        row:0,
        col:0
    })
    return <C.Provider value={{state,state1,setstate1,setstate}}>
           {props.children}
    </C.Provider>
}