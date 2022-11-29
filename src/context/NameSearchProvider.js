import React, { createContext, useState } from 'react';

export const NameSearchContext = createContext("");

export const NameSearchProvider = ({ children }) => {

    const [name, setName] = useState("")

    return (
        <NameSearchContext.Provider value={{ name, setName }}>
            {children}
        </NameSearchContext.Provider>
    );
}