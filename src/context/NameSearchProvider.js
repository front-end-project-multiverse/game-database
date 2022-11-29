import React, { createContext, useState } from 'react';

export const NameSearchContext = createContext("");

export const NameSearchProvider = ({ children }) => {

    const [name, setName] = useState("ALL")
    const [category, setCategory] = useState("ALL")

    return (
        <NameSearchContext.Provider value={{ name, setName, category, setCategory }}>
            {children}
        </NameSearchContext.Provider>
    );
}