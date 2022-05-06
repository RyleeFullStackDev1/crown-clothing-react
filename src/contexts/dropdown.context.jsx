import { createContext, useState } from "react";

export const DropdownContext = createContext({
  dropdownOpen: false,
  setDropdownOpen: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const value = { dropdownOpen, setDropdownOpen };

  return<DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>;
};
