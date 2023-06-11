import React, { useEffect, useState, createContext } from 'react';
export const VenomContext = createContext({} as any);

interface IProps {
    children: React.ReactNode;
  }

export const  VenomProvider = ({children}:IProps) => {
    const [currentAccount, setCurrentAccount] = useState<any>();


    return(
        <VenomContext.Provider value={{currentAccount, setCurrentAccount}}>
            {children}
        </VenomContext.Provider>
    )

}
