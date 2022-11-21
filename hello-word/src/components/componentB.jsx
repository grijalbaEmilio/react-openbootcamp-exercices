import React, { useState } from "react"
import propsType from 'prop-types'
import { ContactClass } from "../models/contact.class"

export const ComponentB = ({contact}) =>{
    
    const [contactState, setContactState] = useState(contact.isConnect);

    return (
        <>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.lastnaem }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Estado: { contactState ? "Contacto en línea": "Contacto no disponible"} 
            </h5>

            <button type="button" onClick={()=>setContactState(!contactState)}> cambiar estado </button>
        </>
    
    )
}


ComponentB.prototype = {
    contact: propsType.instanceOf(ContactClass)
}