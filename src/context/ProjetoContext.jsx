import { createContext, useState } from 'react';

export const ProjetoContext = createContext()

export const ProjetoProvider = ({ children }) => {
    const [projetoCxt] = useState(1);

  
    return (
        <ProjetoContext.Provider value={{ projetoCxt }}>
            {children}
        </ProjetoContext.Provider>
    )
}