"use client";
import React, { useContext, useState } from 'react'
import { links } from '@/lib/data';

export type SectionName = typeof links[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
};

type ActiveSectionContextType = {
  active: SectionName,
  setActive: React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick: number, 
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
}


export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
  children
}:ActiveSectionContextProviderProps) {
  const [active, setActive] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  
  return (
  <ActiveSectionContext.Provider value = {{
    active,
    setActive,
    timeOfLastClick, 
    setTimeOfLastClick,
  }}>
    {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}



export default ActiveSectionContextProvider;