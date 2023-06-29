import { ReactNode, useContext, useState, createContext } from 'react';

type ContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NavbarContext = createContext<ContextType>({
  isOpen: true,
  setIsOpen: () => { /* Empty function */ }
});

function NavbarProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  const value: ContextType = {
    isOpen,
    setIsOpen
  };

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
}

function useNavbar(): ContextType {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}

export { NavbarProvider, useNavbar };
