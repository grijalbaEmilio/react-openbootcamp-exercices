import React, { useEffect, useState } from "react";

let conuter
export const FunctionComponent = () => {
    
    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     })

     const tick = () =>{
        conuter ? conuter = conuter +1 : conuter = 1
        console.log(state.edad);
        setState({...state, fecha: new Date(), edad: conuter })
     }

     useEffect(()=>{

        const inter = setInterval (()=>tick(), 1000);
    
        return () => clearInterval(inter)
     }, [ ])

    return (
        <div>
            <h2>
                Hora Actual: {state.fecha.toLocaleTimeString()}
            </h2>

            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
}