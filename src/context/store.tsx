"use client"
import React, { createContext, useContext, Dispatch, SetStateAction } from "react";

// Define type for the context properties
type ContextProps = {
  isMenuClicked: boolean;
  setIsMenuClicked: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
  setIsScrolled: Dispatch<SetStateAction<boolean>>;
};

// Create the context with default values
const GlobalContext = createContext<ContextProps>({
  isMenuClicked: false,
  setIsMenuClicked: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
});

// Define the provider component
export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuClicked, setIsMenuClicked] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
        isScrolled,
        setIsScrolled,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Export the default provider
export default GlobalContextProvider;

// Export custom hook for using the context
export const useGlobalContext = () => useContext(GlobalContext);
