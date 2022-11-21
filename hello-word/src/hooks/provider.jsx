import React, {createContext} from "react";

export const context = createContext({})

export const Provider = ({children}) => {
    const luis = {name: "luis"}
    return (
       <context.Provider value={luis}>
            {children}
       </context.Provider>
    );
}